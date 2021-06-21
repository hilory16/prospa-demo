import Styled from 'styled-components';

export const Wrapper = Styled.div`
    height:100vh;
    .onboarding-content{
        height:100%;
        overflow-y:scroll;
    }
    
    //MOBILE VIEWPORT 
    @media (max-width:767px){
        height:auto;
        padding-bottom:30px;
    }
    
`