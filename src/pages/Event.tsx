import React, {FC, useState, useEffect} from 'react'
import {Layout, Row, Button, Modal} from "antd";
import {EventCalendar} from "../components/EventCalendar";
import {EventForm} from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])

    return (
        <Layout>
            <EventCalendar events={[]} />
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} />
            </Modal>
        </Layout>
    )
}