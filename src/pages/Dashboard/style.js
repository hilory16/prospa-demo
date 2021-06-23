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
                    margin-right:50px;
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

    

    @media(max-width:1300px){
        .dashboard-content.container{
            padding-right:60px;
            padding-left:60px;
        }
        .dashboard-content .account-analysis .summary .money-item {
            margin-right: 40px;
        }
    }
    
    @media(max-width:1200px){
        .dashboard-content.container{
            padding-right:50px;
            padding-left:50px;
        }
        .dashboard-content .account-analysis .summary .money-item {
            margin-right: 30px;
        }
    }

    @media(max-width:1130px){
        .dashboard-content.container{
            padding-right:35px;
            padding-left:35px;
        }
        .dashboard-content .account-analysis .summary .money-item {
            margin-right: 10px;
        } 
    }

    // IPAD VIEWPORT{
        @media(max-width:995px){
            .main-content-area{
                padding-left: 270px;
            }
            .dashboard-content .account-analysis .left, .dashboard-content .account-analysis .right {
                width: 100%;
                padding:0 !important;
            }
            .dashboard-content .account-analysis .left{
                margin-bottom:25px;
            }
            ul li .bar {
                width: 170px;
            }
        }
    }

    // BIG-MOBILE
    // @media(max-width:860px){
    //     // width: 280px;
    //     display:none;
    // }

    @media(max-width:767px){
        .main-content-area{
            padding-left:0;
        }
        .main-content-area.no-scroll{
            height:100vh;
            overflow:hidden;
        }
        .dashboard-content.container {
            padding-right: 25px;
            padding-left: 25px;
            max-width:100%;
        }
        .dashboard-content .account-analysis .left{
            padding-right:10px !important; 
            width: 55%;
        }
        .dashboard-content .account-analysis .right{
            padding-left:10px !important;
            width: 45%;
        }
    }
    @media(max-width:675px){
        .dashboard-content .account-analysis .left, .dashboard-content .account-analysis .right{
            padding:0 !important; 
            width: 100%;
        }
        .dashboard-content .account-analysis .summary .money-item {
            margin-right: 30px;
        }
    }
    @media(max-width:500px){
        .dashboard-content.container {
            padding-right: 15px;
            padding-left: 15px;
        }
        .dashboard-content .account-analysis .summary .money-item {
            margin-right: 12px;
        }
        .dashboard-content .account-analysis .summary .money-item:last-child{
            margin-right: 0;
        }
    }
    @media(max-width:320px){
        .dashboard-content .account-analysis .summary .money-item p, dashboard-content .account-analysis .summary .money-item h6 {
            font-size: 12px;
        }
    }
`