import Styled from 'styled-components';

export const Wrapper = Styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 6px #8397AB29;
    border-radius: 6px;
    padding:29px 24px;
    h4{
        font-size:18px;
        line-height:24px;
        font-weight:600;
        color:#1C1335;
        margin-bottom:53px;
    }
    ul li{
        margin-bottom:46px;
        .outflow-type{
            list-style:none;
        }
        .cashflow-icon{
            width:24px;
            height:24px;
            margin-right:16px;
        }
        .cashflow-name{
            color: #8397AB;
            font-size:14px;
            line-height:19px;
            font-weight:400;
        }
        .amount{
            font-size:14px;
            line-height:19px;
            font-weight:400;
            color:#1C1335;
        }
        .bar{
            height:6px;
            background: #EEEFF7 0% 0% no-repeat padding-box;
            border-radius: 3px;
            width:174px;
            position:relative;
        }
        .bar-content{
            positon:absolute;
            left:0;
            width:80%;
            height:100%;
            background: #FFCF56 0% 0% no-repeat padding-box;
        }
    }
`