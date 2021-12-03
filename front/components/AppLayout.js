import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; // next 자체 라우터
import {Menu, Input, Row, Col} from'antd';
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import styled  from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`

const AppLayout = ({children})=>{
    const [isLogggedin, setIsLogggedin] = useState(false);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>    
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}> 
                <Col xs={24} md={6}> 
                    {isLogggedin ? <UserProfile /> : <LoginForm/>}
                </Col>        
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/Duck-98" target="_blank" rel="_noreferrer noopener">Made by Duck</a>
                </Col>    {/* 보안성 문제로 타겟 _blank를 사용했을 때  rel="_noreferrer noopener"도 사용되어야 한다. */}
            </Row>
        </div>
    )
};

AppLayout.propTypes={
    children : PropTypes.node.isRequired,

};
 
export default AppLayout;