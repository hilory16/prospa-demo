import Styled from 'styled-components';

export const RegularInputWrapper = Styled.div`
    height:44px;
    position:relative;
    width:100%;
    margin-bottom:24px;
    .input{
        background: #F4F8FB 0% 0% no-repeat padding-box;
        height:42px;
        border:none;
        border-bottom:2px solid #E0E2EC;
        width:100%;
        outline:none;
        padding:0 15px;
        color: #1C1335;
        font-size:14px;
        line-height:19px;
        font-size:14px;
        font-weight:600;
    }
    .country-phone-code{
        margin-right:12px;
        width:120px;
    }
    .phone-number{
        width:100%;
    }
    .active-field{
        height:2px;
        position:absolute;
        bottom:2px;
        transition:all ease .3s;
        width:100%;
    }
    .active-field::after{
        content:'';
        width:0;
        height:100%;
        background: transparent linear-gradient(270deg, #00D2FF 0%, #7E51FF 51%, #FA4A84 100%) 0% 0% no-repeat padding-box;
        margin:0 auto;
        display:block;
        transition:all ease .4s;
    }
    .input:focus, .input:valid {
        padding-top:22px;
    }
    .input:focus + label, .input:valid + label{
        top:7px;
        color:#FA4A84;
        font-size:10px;
        line-height:14px;
    }
    .input:not(:focus) + label{
        color:#1C1335;
    }
    .input:focus + label + .active-field::after {
        width:100%;
    }
    .email:not([value="email"]){
        padding-top:22px;
    }
    .email:not([value=""]) + label{
        top:7px;
        color:red;
        font-size:10px;
        line-height:14px;
    }
    label{
        color: #8397AB;
        font-size:12px;
        line-height:16px;
        margin:0;
        position:absolute;
        left:15px;
        top:17px;
        transition:all ease .3s;
        pointer-events:none;
    }
`