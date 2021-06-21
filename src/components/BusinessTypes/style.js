import Styled from 'styled-components';

export const Wrapper = Styled.label`
    margin-bottom:16px;
    padding:24px 16px 16px 16px;
    box-shadow: 0px 4px 8px #8397AB3D;
    border-radius: 6px;
    transition:all ease-in-out .3s;
    cursor:pointer;
    border:1px solid transparent;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition:all ease-in .3s;
    .radio{
        margin-top:5px;
        margin-right:13px;
        .radio-container {
            position: relative;
            width:16px;
            height:16px;
        }
          
          /* Hide the browser's default radio button */
          .radio-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }
          
          /* Create a custom radio button */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            border:2px solid #EEEFF7;
            height: 16px;
            width: 16px;
            background-color: #fff;
            border-radius: 50%;
          }
          
          /* On mouse-over, add a grey background color */
          .radio-container:hover input ~ .checkmark {
            background-color: #ccc;
          }
          
          /* When the radio button is checked, add a background */
          .radio-container input:checked ~ .checkmark {
            background-color: #FA4A84;
          }
    }
    .business-details{
        width:100%;
    }
    .business-type{
        color: #1C1335;
        font-size:16px;
        font-weight:600;
        line-height:21px;
        width:100%;
        margin-bottom:0;
    }
    .business-desc{
        color: #8397AB;
        font-size:13px;
        font-weight:400;
        line-height:17px;
    }
    .business-benefits{
        height:0;
        overflow:hidden;
        transition:all cubic-bezier(0,-0.02, 1, 1) .3s;
    }
    .business-benefits.active-benefit{
        height:100%;
    }
    .business-benefits li{
        list-style:none;
        display:flex;
        align-items:center;
        margin-bottom:8px;
    }
    .business-benefits li img{
        width:16px;
        height:16px;
        margin-right:13px;
    }
    .business-benefits li span{
        font-size:13px;
        font-weight:400;
        line-height:17px;
        color: #8397AB;
    }
    .active-business-block, :hover{
        border: 1px solid #FA4A84;
    }
`