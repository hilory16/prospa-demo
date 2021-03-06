import Styled from 'styled-components';

export const Sidebar = Styled.div`
    .sidebar{
        box-shadow: 0px 2px 22px #8397AB3D;
        position:fixed;
        left:0;
        bottom:0;
        top:0;
        height:100vh;
        width:300px;
        padding:0px 0;
        z-index:1000;
        background:#fff;
        cursor:pointer;
    }
    .business-accounts{
        border-bottom:1px solid #EEEFF7;
        padding:20px 30px;
        position:relative;
        img{
            width:40px;
            height:40px;
        }
        .business-logo{
            border-radius:50%;
        }
        .business-text{

        }
        .business-name{
            color: #1B003B;
            font-size:16px;
            font-weight:600;
            line-height:21px;
            margin-bottom:0;
        }
        .manage-accounts{
            color: #8397AB;
            font-size:12px;
            font-weight:400;
            line-height:16px;
        }
        .business-dropdown-arrow{
            cursor:pointer;
            transition:all ease-in-out .3s;
        }
        .business-dropdown-arrow.rotate{
            transform:rotate(180deg)
        }
        .businesses-dropdown{
            position:absolute;
            box-shadow: 0px 0px 0px #8397AB52;
            background:#fff;
            border-radius: 4px;
            // width:85%;
            left:21.5px;
            right:21.5px;
            margin-top:0;
            overflow-y:hidden;
            z-index:100;
            height:0;
            transition:all ease-in-out .3s;
            li{
                list-style:none;
                color: #1C1335;
                font-size:13px;
                font-weight:400;
                line-height:17px;
                padding:14px 20px;
                border-bottom: .5px solid #EEEFF7;
                transition:all ease-in-out .3s;
            }
            li:nth-last-child(2){
                border:none;
            }
            li a{
                color: #8397AB;
                :hover{
                    text-decoration:none;
                    color:#FA4A84;
                }
                
            }
            .add-business{
                color: #FA4A84;
                font-size:11px;
                font-weight:400;
                padding:0 20px 13px 20px;
                line-height:15px;
                cursor:pointer;
            }
        }
        .active-all-businesses{
            height:auto;
            box-shadow: 0px 4px 16px #8397AB52;
            margin-top:10px;
            border: 1px solid #EEEFF7;

        }
    }
    .sidebar-links{
        padding:38px 32px;
    }

    .foot-logo{
        position:absolute;
        bottom:32px;
        left:32px;
        img{
            width:108px;
            height:24px;
        }
    }
    @media(max-width:995px){
        .sidebar{
            width: 270px;
        }
        
    }

    @media(max-width:767px){
        .sidebar{
            width:100%;
            left:-100%;
            overflow-y:hidden;
            top:80px;
            height:calc(100vh - 80px);
            transition:all ease-in-out .3s;
        }
        .sidebar.show{
            left:0;
        }
    }
`
export const LinkWrapper = Styled.li`
    list-style:none;
    margin-bottom:29px;
    .menu-svg{
        transition:all ease-in-out .3s;
    }
    a{
        color: #8397AB;
        font-size:14px;
        font-weight:400;
        line-height:19px;
        transtion:all ease-in-out .3s;
    }
    .active-link, a:hover{
        text-decoration:none;
        color:#FA4A84;
        .bright-change{
            fill:#fa4a84;
        }
        .dark-change{
            fill:#fedbe6;
        }
    }
    .link-icon{
        width:24px;
        height:24px;
        margin-right:16px;
    }
    span{

    }
    // #fedbe6
    // #fa4a84
    // light #b5c1cd
    // Dark #8397ab
`