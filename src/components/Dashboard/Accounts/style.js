import Styled from 'styled-components';

export const Wrapper = Styled.div`
    .account-item{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 4px 6px #8397AB29;
        border-radius: 6px;
        padding:18px 24px 8px 24px;
        margin-bottom:28px;

        .account-type{
            color: #1C1335;
            font-size:14px;
            line-height:19px;
            font-weight:600;
            margin-bottom:3px;
        }
        .account-number{
            color:#8397AB;
            font-size:14px;
            line-height:19px;
            font-weight:400;
            margin-bottom:55px;
        }
        .amount{
            font-size:32px;
            line-height:36px;
            font-weight:400;
            span{
                font-size:24px;
            }
        }
        .account-icon{
            width:44px;
            height:44px;
        }
    }
`