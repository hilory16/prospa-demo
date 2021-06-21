import Styled from 'styled-components';

export const Wrapper =  Styled.div`
    height:100%;
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