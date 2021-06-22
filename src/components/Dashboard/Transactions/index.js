import {Link} from 'react-router-dom';
import TransactionItem from './TransactionItem';
import BankGreyImg from '../../../assets/img/bank-grey.svg'
import BuyImg from '../../../assets/img/buy.svg'
import {Wrapper} from './style'
const Index = () => {
    return (
        <Wrapper className="transactions-container">
            <div className="d-flex align-items-center justify-content-between transactions-heading">
                <h4 className="mb-0"> Recent transactions </h4>
                <Link className="see-all">See all</Link>
            </div>

            <ul className="transactions p-0 m-0">
                <TransactionItem icon={BankGreyImg} desc="Transfer Fee" time="12:49 AM" amount="-N145.90"/>
                <TransactionItem icon={BuyImg} desc="Adam Chapman" time="12:49 AM" amount="-N2,000.00"/>
                <TransactionItem icon={BuyImg} desc="Shirley Barnes" time="12:49 AM" amount="-N2,000.00"/>
                <TransactionItem icon={BuyImg} desc="Shirley Barnes" time="12:49 AM" amount="-N2,000.00"/>
            </ul>
        </Wrapper>
    );
}

export default Index;
