import React, {FC} from "react";
import {useHistory} from "react-router-dom";
import {Layout, Menu, Row} from "antd"
import {RouteNames} from "../routes";

export const Navbar: FC = () => {
    const history = useHistory()
    const auth = true
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth
                        ?
                        <>
                            <div style={{color: 'white'}}>Ilya</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item onClick={() => alert('Logout is developed...')} key="1">Logout</Menu.Item>
                            </Menu>
                        </>
                        :
                        <>
                            <div style={{color: 'white'}}>Ilya</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item onClick={() => history.push(RouteNames.LOGIN)} key="1">Login</Menu.Item>
                            </Menu>
                        </>
                }
            </Row>
        </Layout.Header>
    )
}