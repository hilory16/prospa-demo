import styled from 'styled-components';
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
    .input:focus, .input:valid, .email:not([value=""]) {
        padding-top:22px;
    }
    .input:focus + label, .input:valid + label, .email:not([value=""]) + label{
        top:7px;
        color:#FA4A84;
        font-size:10px;
        line-height:14px;
    }
    .input:not(:focus):not([value=""]) + label{
        color:#8397AB;
    }
    .input:focus + label + .active-field::after {
        width:100%;
    }
    .email:focus + label{
        color:#FA4A84;  
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

    @media(max-width:767px){
        label{
            font-size:13px;
            line-height:19px;
        }
        .input:focus + label, .input:valid + label, .email:not([value=""]) + label{
            font-size:11px;
            line-height:16px;
            top:5px;
        }
    }
    
`

export const CountryCode = Styled(RegularInputWrapper)`
    position:relative;
    margin-right:12px;
    border-bottom:2px solid #E0E2EC;
    width:178px;
    background: #F4F8FB 0% 0% no-repeat padding-box;
    // padding:0 12px 0 16px;
    .country-code-label{
        font-size:10px;
        z-index:500;
        top:7px;
        transition:all ease .4s;
    }
    .phone-caret{
        position: absolute;
        z-index: 202;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
    .active-field{
        z-index:300;
        bottom:-1px;
    }
    .show.active-field::after {
        width:100%;
    }
    .country-code-label.show{
        color:#FA4A84;
    }
    @media(max-width:767px){
        .country-code-label{
            top:5px;
            font-size:11px;
        }
    }
`