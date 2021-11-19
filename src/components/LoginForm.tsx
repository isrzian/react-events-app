import React, {FC, useState} from "react";
import {Form, Input, Button} from "antd"
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submit = () => {
        dispatch(AuthActionCreators.login(username, password))
    }
    return (
        <Form
            onFinish={submit}
        >
            {
                error && <div style={{color: 'red'}}>{error}</div>
            }
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={event => setUsername(event.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input value={password} onChange={event => setPassword(event.target.value)} type="password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    )
}