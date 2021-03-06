import React, {useCallback, useState} from 'react';
import Head from "next/head";
import {Form, Input, Checkbox, Button} from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from "../hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Singup = () => {

    const[id, onChangeId] = useInput('')
    const[nickname, onChangeNickname] = useInput('')
    const[pwd, onChangePwd] = useInput('')

    const [pwdCheck, setPwdCheck] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const onChangePwdCheck = useCallback((e) => {
        setPwdCheck(e.target.value);
        setPwdError(e.target.value !== pwd);
        },[pwd]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false)
    },[])

    // const [id, setId] = useState('');
    //
    // const onChangeId = useCallback(() => {
    //     setId(e.target.value)
    // },[]);
    //=> 중복되는 것들을 useInput custom hook으로 반복시킴

    const onSubmit = useCallback(() => {
        if(pwd !== pwdCheck) {
            return setPwdError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log('id:', id, 'nick:', nickname, 'pwd:', pwd)
    },[pwd, pwdCheck, term]);

    return (
        <>
            <AppLayout>
                <Head>
                    <title>회원가입 | NodeBird</title>
                </Head>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId}/>
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br/>
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
                    </div>
                    <div>
                        <label htmlFor="user-pwd">비밀번호</label>
                        <br/>
                        <Input name="user-pwd" type="password" value={pwd} required onChange={onChangePwd}/>
                    </div>
                    <div>
                        <label htmlFor="user-pwd-check">비밀번호체크</label>
                        <br/>
                        <Input
                            name="user-pwd-check"
                            type="password"
                            value={pwdCheck}
                            required
                            onChange={onChangePwdCheck}
                        />
                        {pwdError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>이유빈의 말을 잘 들을 것을 동의합니다.</Checkbox>
                        {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Singup;
