import {Link} from 'react-router-dom';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar'
import DashboardTopbar from '../../components/Dashboard/DashboardTopbar';
import Accounts from '../../components/Dashboard/Accounts';
import CashOutflow from '../../components/Dashboard/CashOutflow';
import Transactions from '../../components/Dashboard/Transactions'
import {Wrapper} from './style'
const Index = () => {
    return (
        <Wrapper>
            <DashboardSidebar/>
            <main className="main-content-area">
                <DashboardTopbar/>

                <div className="dashboard-content container">
                    <div className="d-flex justify-content-between align-items-center welcome-message-container">
                        <div className="welcome-message ">
                            <h3 className="mb-0">Welcome back, Kathy</h3>
                            <h6 className="">Here’s what has been happening in the last <Link to="">7 days</Link> </h6>
                        </div>
                        <div className="add-subaccount">
                            <button className="add-subaccount">
                                Add a sub account
                            </button>
                        </div>
                    </div>

                    <Accounts/>

                    <div className="account-analysis">
                        <div className="d-flex">
                            <div className="left pr-2">
                                <div className="summary">
                                    <h4>June summary</h4>
                                    <div className="d-flex align-items-center ">
                                        <div className="money-item">
                                            <h6 className="mb-0">Money in</h6>
                                            <p className="mb-0">N 5,650,000</p>
                                        </div>
                                        <div className="money-item">
                                            <h6 className="mb-0">Money out</h6>
                                            <p className="mb-0">N 5,650,000</p>
                                        </div>
                                        <div className="money-item">
                                            <h6 className="mb-0">Difference</h6>
                                            <p className="mb-0">N 5,650,000</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="right pl-2">
                                <CashOutflow />
                            </div>
                        </div>
                    </div>

                    <Transactions/>
                </div>
            </main>
        </Wrapper>
    );
}

export default Index;
