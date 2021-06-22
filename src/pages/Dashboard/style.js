import Styled from 'styled-components';

export const Wrapper = Styled.div`
    .main-content-area{
        padding-left:300px;
        background:#F4F8FB;
        min-height:100vh;
    }
    
    .dashboard-content.container{
        padding-right:80px;
        padding-left:80px;
    }
    .dashboard-content{
        padding-top:38px;

        .welcome-message-container{
            margin-bottom:31px;
        }

        .welcome-message{
            h3{
                font-size:24px;
                line-height:32px;
                font-weight:600;
            }
            h6{
                color: #1C1335;
                font-size:16px;
                line-height:21px;
                font-weight:400;
                a{
                    color:#FA4A84;
                    text-decoration:underline;
                }
            }
        }
        .welcome-message-container{
            button{
                border:none;
                background: #FA4A84 0% 0% no-repeat padding-box;
                box-shadow: 0px 2px 4px #00000029;
                border-radius: 4px;
                width:171px;
                height:44px;
                font-size:14px;
                line-height:19px;
                font-weight:600;
                color:#fff;
            }
        }
        .account-analysis{
            .left{
                width:55%;
            }
            .right{
                width:45%;
                margin-bottom:24px;
            }
            .summary{
                background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 4px 6px #8397AB29;
                border-radius: 6px;
                padding:29px 24px;
                h4{
                    font-size:18px;
                    line-height:24px;
                    font-weight:600;
                    color:#1C1335;
                    margin-bottom:26px;
                }
                .money-items{
                }
                .money-item{
                    margin-right:55px;
                    h6{
                        font-size:14px;
                        line-height:19px;
                        font-weight:400;
                        color:#8397AB;
                    }
                    p{
                        font-size:14px;
                        line-height:19px;
                        font-weight:600;
                        color: #1C1335;
                    }
                }
                tspan{
                    font-size:10px;
                    line-height:14px;
                    color:#8397AB;
                }
                &-chart{
                    height:274px;
                }
            }
        }
    }
`