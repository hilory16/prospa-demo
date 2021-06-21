import Styled from 'styled-components';

export const Wrapper = Styled.div`
    width:75%;
    .back-img img{
        width:32px;
        height:32px;
        cursor:pointer;
    }
    .sign-in{
        margin-bottom:110px;
        margin-top:37px;
        padding:0 60px;
    }
    .sign-in p{
        letter-spacing: 0px;
        color: #1C1335;
        font-size:14px;
        font-weight:600;
        line-height:19px;
        a{
            letter-spacing: 0px;
            color: #FA4A84;
            :hover{
                text-decoration:none;
            }
        }
    }

    // MOBILE VIEWPORT
    @media (max-width:767px){
        width:100%;
        .sign-in{
            padding:0;
            margin-bottom:40px;
            margin-top:35px;
            .back-img{
                width:100%;
                margin-bottom:20px;
            }
        }
    }

    
`