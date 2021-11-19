import React, {FC} from "react";
import {useHistory} from "react-router-dom";
import {Layout, Menu, Row} from "antd"
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

export const Navbar: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: 'white'}}>{user.username}</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())} key="1">Logout</Menu.Item>
                            </Menu>
                        </>
                        :
                        <>
                            <div style={{color: 'white'}}>Unknown User</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item onClick={() => history.push(RouteNames.LOGIN)} key="1">Login</Menu.Item>
                            </Menu>
                        </>
                }
            </Row>
        </Layout.Header>
    )
}