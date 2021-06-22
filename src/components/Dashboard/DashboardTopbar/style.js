import Styled from 'styled-components';

export const Wrapper = Styled.div`
    padding-top:20px;
    padding-bottom:20px;
    background:#fff;
    padding-right:80px;
    padding-left:80px;
    
    a{
        transition:all ease-in-out .3s;
        :hover{
            text-decoration:none;
            opacity:.8;
        }
    }
    h3{
        font-size:21px;
        font-weight:600;
        line-heeight:28px;
        color:#8397AB;
    }

    .notitification-icon{
        width:32px;
        height:32px;
        margin-right:24px;
        cursor:pointer;
    }
    .user .avatar{
        width:40px;
        height:40px;
        cursor:pointer;
    }
`