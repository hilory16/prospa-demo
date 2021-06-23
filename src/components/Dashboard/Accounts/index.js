import AccountItem from './AccountItem';
import CurrentIconImg from '../../../assets/img/current-account.svg';
import SavingsIconImg from '../../../assets/img/savings-account.svg'
import {Wrapper} from './style';


const Index = () => {
    return (
        <Wrapper className="accounts row">
            <div className="col-lg-6 pr-lg-2 pr-3 reduce reduce-left">
                <AccountItem
                    details={{type:"CURRENT ACCOUNT", bank:"PROVIDUS BANK", number:"9906533917", balance:814800.45}}
                    icon={CurrentIconImg}
                />
            </div>

            <div className="col-lg-6 pl-lg-2 pl-3 reduce reduce-right">
                <AccountItem 
                    details={{type:"SAVINGS ACCOUNT", bank:"SUB ACCOUNT", number:"12346789", balance:38342.45}}
                    icon={SavingsIconImg}
                />  
            </div>
        </Wrapper>
    );
}

export default Index;
