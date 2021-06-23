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
        // opacity: 0;
        // transform:translateY(0);
      }
      .my-node-exit-active {
        opacity: 0;
        transform:translateY(100%);
        // transition: all 1000ms;
      }
      .my-node-exit-done{
        opacity: 1;
        transform:translateY(0);
        transition: transform 500ms;
      }
    
    //MOBILE VIEWPORT 
    @media (max-width:767px){
        height:auto;
        padding-bottom:30px;
    }
    
`