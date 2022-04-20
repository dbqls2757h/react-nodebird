import React, {useState, useCallback} from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({setIsLoggedInState}) => {

    const [id, onChangeId] = useInput('');
    const[pwd, onChangePwd] = useInput('')

    // const [id, setId] = useState('');
    // const [pwd, setPwd] = useState('');
    //
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value)
    // },[]);
    //
    // const onChangePwd = useCallback((e) => {
    //     setPwd(e.target.value)
    // },[]);
    //=> useInput hook으로 처리

    const onSubmitForm = useCallback((e) => {
        console.log(id, pwd)
    },[id, pwd]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-pwd">비밀번호</label>
                <br/>
                <Input
                    name="user-pwd"
                    type="password"
                    value={pwd}
                    onChange={onChangePwd}
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup">
                    <a><Button>회원가입</Button></a>
                </Link>
            </ButtonWrapper>
        </Form>
    );
}

export default LoginForm;