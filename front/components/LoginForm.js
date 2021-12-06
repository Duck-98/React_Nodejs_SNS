import React,{useState, useCallback, useMemo} from 'react'
import {Form,Input,Button} from 'antd';
import Link from 'next/link'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top : 10px;
`;

const LoginForm = ({setIsLoggedin}) =>{
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) =>{
        setId(e.target.value);
    },[]); // 컴포넌트에 props로 들어가기 때문에 usecallback을 이용하여 최적화해줌.

    const onChangePassword = useCallback((e) =>{
        setPassword(e.target.value);
    },[]);

    /*const style = useMemo(() => ({marginTop : 10}), []); // 리렌더링 성능 최적화를 위함. */

    const onSubmitForm = useCallback(()=>{ // 컴포넌트에 넣기 때문에 useCallback을 사용함.
        console.log(id, password);
        setIsLoggedin(true);
    },[id, password])

    const FormWrapper = styled(Form)`
    padding : 10px;
    `

    return(
        <FormWrapper onFinish={onSubmitForm}>  {/* onFinish는 이미 prevent.default가 적용되어있음.*/}
            <div>
                <label htmlFor ="user-id">아이디</label>
                <br />
                <Input name ="user-id" value={id} onChange = {onChangeId} required />
            </div>
            <div>
                <label htmlFor ="user-password">비밀번호</label>
                <br />
                <Input name ="user-password" type="password" value={password} onChange = {onChangePassword} required />
            </div>
            <ButtonWrapper /*style={style}*/>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;