import React, {FC, useState} from "react";
import {rules} from "../utils/rules";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";

interface EventFormProps {
    guests: IUser[]
}

export const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)

    return (
        <Form>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="Guest"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {
                        props.guests.map(guest =>
                            <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}