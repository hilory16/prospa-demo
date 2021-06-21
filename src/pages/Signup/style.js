import Styled from 'styled-components';

export const Wrapper = Styled.div`
    height:100vh;
    .onboarding-content{
        height:100%;
        overflow-y:scroll;
    }
    .onboarding-info-slides{
        width:26%;
        // height:130%;
        overflow-y:scroll;
        color:#FFFFFF;
        position:relative;
        .onboarding-info-slides-item{
            background: #7E51FF 0% 0% no-repeat padding-box;
            // height:100%;
            width:100%;
            padding:32px;
            padding-top:calc(32px + 52px + 24px);
        }
        .prospa-logo{
            position:absolute;
            top:32px;
            left:32px;
            margin-bottom:52px;
            img{
                
            }
        }
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #999;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #888;
        }
        // .slick-track,.slick-list{
        //     max-width:100%;
        //     height:100%;
        // }
        // .slick-slider{
        //     height:80%;
        //     max-width:100%;
        // }
        .slick-slide{
            min-height:100%;
        }
        

        .slides-indicators{
            display:flex;
            justify-content:space-between;
            margin-bottom:50px;
            .slides-indicator-item{
                height:2px;
                border-radius:2px;
                background:rgba(255,255,255,.4);
                width:19%;
                position:relative;
                opacity:1;
                max-width:100%;
            }
            .slides-indicator-item.viewed::after{
                content:"";
                position:absolute;
                bottom:0;
                left:0;
                width:100%;
                height:100%;
                background:#fff;
            }
            .slides-indicator-item .active{
                position:absolute;
                bottom:0;
                left:0;
                width:50%;
                height:100%;
                background:#fff;
                max-width:100%;
                transition: all 1000ms cubic-bezier(0.02,-0.01, 1, 0.99);
                border-radius: 2px;
            }
        }

        .slide-description{
            // margin-bottom:30px;
            h2{
                font-size:32px;
                line-height:43px;
                font-weight:600;
                margin-bottom:0;
                pointer-events:none;
            }
            h6{
                font-size:14px;
                line-height:18px;
                font-weight:400;
                margin-bottom:0;
                pointer-events:none;
            }
        }
        .slide-img{
            // position:absolute;
            // bottom:52px;
            // left:32px;
            margin-top:50px;
            max-width:100%;
        }
        .copyright{
            position:absolute;
            bottom:20px;
            left:32px;
        }
    }
    .onboarding-form-area{
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

        .form{
            max-width:375px;
            .onboarding-name{
                color: #1B003B;
                font-size:28px;
                font-weight:600;
                line-height:37px;
               
            }
            .onboarding-description{
                color: #8397AB;
                opacity: 1;
                font-size:16px;
                line-height:21px;
                font-weight:400;
                margin-bottom:27px;
            }
            .form-field{
                height:44px;
                position:relative;
                width:100%;
                margin-bottom:24px;
            }
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
            .input:valid + label{
                color:#1C1335;
            }
            // .input:focus + label, .input:valid + label{
            //     top:7px;
            //     
            //     font-size:10px;
            //     line-height:14px;
            // }
            .input:focus + label + .active-field::after {
                width:100%;
            }
            input[type=email]:invalid + {

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
            button.next{
                background: #FA4A84 0% 0% no-repeat padding-box;
                border-radius: 6px;
                width:100%;
                height:50px;
                font-size:16px;
                font-weight:600;
                color:#fff;
                outline:none;
                border:none;
            }
        }
    }
`