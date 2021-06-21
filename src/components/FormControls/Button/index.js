import { Form } from 'formik';
import React from 'react';
import styled from 'styled-components';

const ButtonNextStyles = styled.div`
    button.next{
        background: #FA4A84 0% 0% no-repeat padding-box;
        border-radius: 6px;
        width:100%;
        height:50px;
        font-size:16px;
        font-weight:600;
        color:#fff;
        outline:none;
        border:none;
    }
`
const Index = ({name}) => {
    return (
        <ButtonNextStyles>
            <button className={`submit-button disabled next`} type="submit"> {name}</button>
        </ButtonNextStyles>
    );
}

export default Index;
