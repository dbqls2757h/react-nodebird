import React from 'react';
import styled from 'styled-components'

import {Form, Input} from "antd";

const NickNameEditForm = () => {

    const SearchInput = styled(Input.Search)`
      margin-bottom: 20px;
      border: 1px solid #d9d9d9;
      padding: 20px;
    `;

    return (
        <Form>
            <SearchInput addonBefore="닉네임" enterButton="수정"/>
        </Form>
    );
};

export default NickNameEditForm;
