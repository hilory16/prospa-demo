import Styled from 'styled-components';

export const Wrapper = Styled.div`
    height:100vh;
    .onboarding-content{
        height:100%;
        overflow-y:scroll;
    }

    .my-node-enter {
        opacity: 0;
        transform:translateY(100%);
      }
      .my-node-enter-active {
        opacity: 1;
        transform:translateY(0);
        transition: all 500ms;
      }
      .my-node-exit {
        opacity: 1;
      }
      .my-node-exit-active {
        opacity: 0;
        transition: opacity 200ms;
      }
    
    //MOBILE VIEWPORT 
    @media (max-width:767px){
        height:auto;
        padding-bottom:30px;
    }
    
`