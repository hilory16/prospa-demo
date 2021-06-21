import Styled from 'styled-components';

export const Wrapper = Styled.div`
        width:360px;
        overflow-y:scroll;
        color:#FFFFFF;
        position:fixed;
        height:100%;
        max-width:400px;
        min-width: 358px;
        .onboarding-info-slides-item{
            min-height:100%;
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
        .slick-slide{
            min-height:100%;
        }
        .copyright{
            position:absolute;
            bottom:20px;
            left:32px;
        }
`