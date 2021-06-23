import Styled from 'styled-components';

export const Wrapper = Styled.div`
    max-width:380px;
    .onboarding-name{
        color: #1B003B;
        font-size:26px;
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
    @media(max-width:767px){
        max-width:100%;
    }
    
`;