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
    button.form-error{
        opacity:.5;
        cursor: not-allowed
    }
`
const Index = ({name, classList, handleClick}) => {
    return (
        <ButtonNextStyles>
            {
                handleClick
                ?<button className={`submit-button disabled next ${classList}`} type="submit" disabled={classList ? classList.includes('form-error') : null} onClick={handleClick}> {name}</button>
                :<button className={`submit-button disabled next ${classList}`} type="submit" disabled={classList ? classList.includes('form-error') : null} > {name}</button>
            }
            
        </ButtonNextStyles>
    );
}

export default Index;
