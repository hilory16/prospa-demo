import Styled from 'styled-components';

export const Wrapper =  Styled.div`
    height:100%;
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
        margin-top:50px;
        max-width:100%;
    }
    .slider-navigation{
        width:50%;
        position:absolute;
        top:0;
        bottom:0;
        background:transparent;
        height:100%;
        z-index:200;
    }
    .prev.slider-navigation{
        left:0;
        // background:yellow;
    }
    .next.slider-navigation{
        right:0;
    }
`;