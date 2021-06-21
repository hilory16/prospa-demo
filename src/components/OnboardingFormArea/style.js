import Styled from 'styled-components';

export const Wrapper = Styled.div`
    width:75%;
    .sign-in p{
        margin-bottom:110px;
        margin-top:37px;
        padding-right:80px;
        letter-spacing: 0px;
        color: #1C1335;
        font-size:14px;
        font-weight:600;
        a{
            letter-spacing: 0px;
            color: #FA4A84;
        }
    }

    // MOBILE VIEWPORT
    @media (max-width:767px){
        width:100%;
        .sign-in p{
            margin-bottom:40px;
            margin-top:35px;
        }
    }

    
`