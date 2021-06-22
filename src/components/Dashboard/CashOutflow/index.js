import OutflowItem from './OutflowItem';
import BankIconImg from '../../../assets/img/bank.svg'
import InternetIconImg from '../../../assets/img/internet.svg'
import MarketingIconImg from '../../../assets/img/marketing.svg'
import TransferIconImg from '../../../assets/img/transfer.svg'
import {Wrapper} from './style'
const Index = () => {
    return (
        <Wrapper className="cash-outflow">
            <h4 className="">Cash outflow</h4>
            <ul className="m-0 p-0">
                <OutflowItem name="Bank Fees" amount={250000} icon={BankIconImg}/>
                <OutflowItem name="Internet" amount={250000} icon={InternetIconImg}/>
                <OutflowItem name="Marketing" amount={250000} icon={MarketingIconImg}/>
                <OutflowItem name="Transfer" amount={250000} icon={TransferIconImg}/>
            </ul>
        </Wrapper>
    );
}

export default Index;
