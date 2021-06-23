import Styled from 'styled-components';

export const Wrapper = Styled.div`

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 6px #8397AB29;
    border-radius: 6px;
    padding:32px 24px;
    .transactions-heading{
        margin-bottom:33px;
    }
    h4{
        font-size:18px;
        line-height:24px;
        font-weight:600;
        color:#1C1335;
    }
    .see-all{
        font-size:14px;
        line-height:19px;
        font-weight:600;
        color:#FA4A84;
        border: 1px solid #FA4A84;
        border-radius: 6px;
        padding:9px 16px 4px 16px;
        transition:all ease .3s;
        :hover{
            text-decoration:none;
            opacity:.8;
        } 
    }
    .transactions{
        li{
            border-bottom:1px solid #E6EFF8;
            padding:18px 0;
        }
        li:first-child{
            padding-top:0;
        }
        li:last-child{
            border-bottom:none;
            padding-bottom:0;
        }
        .icon{
            width:40px;
            height:40px;
            margin-right:16px;
        }
        h6{
            font-size:16px;
            line-height:21px;
            font-weight:600;
            color: #1C1335;
        p{
            font-size:14px;
            line-height:19px;
            font-weight:600;
            color:#8397AB;
        }
        .amount{
            font-size:16px;
            line-height:21px;
            font-weight:400;
            color: #1C1335;
        }
    }
`