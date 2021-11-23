import React, {FC, useState, useEffect} from 'react'
import {Layout, Row, Button, Modal} from "antd";
import {EventCalendar} from "../components/EventCalendar";
import {EventForm} from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { IEvent } from '../models/IEvent';

export const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                    guests={guests}
                    submit={event => addNewEvent(event)}
                />
            </Modal>
        </Layout>
    )
}