
import {useState} from 'react';
import {Link} from 'react-router-dom'
import SidebarLink from './SidebarLink';
import BusinessLogoImg from '../../../assets/img/business-logo.png'
import SwitchBusinessImg from '../../../assets/img/switch-business.svg';
import ProspaLogoImg from '../../../assets/img/prospa-logo-2.svg';
import { WandSvg, AccountSvg, InvoiceSvg, TransferSvg} from './SidebarMenuIcons'
import {Sidebar} from './style'


const Index = ({showSidebar}) => {
    const [showAllBusinesses, setShowAllBusinesses] = useState(false)
    return (
        <Sidebar >
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <div className="business-accounts">
                    <div className="d-flex align-item-center justify-content-between" onClick={() => (setShowAllBusinesses(!showAllBusinesses))}>
                        <img src={BusinessLogoImg} alt="" className="business-logo"/>
                        <div className="business-text">
                            <h2 className="business-name">Clayvant Inc</h2>
                            <p className="manage-accounts mb-0">Manage account</p>
                        </div>
                        <img src={SwitchBusinessImg} alt="" className={`business-dropdown-arrow ${showAllBusinesses ? 'rotate' : ""}`} />
                    </div>
                    <div className={`businesses-dropdown ${showAllBusinesses ? 'active-all-businesses' : ""}`}>
                        <ul className="m-0 p-0">
                            <li className="businesses-dropdown-item">Clayvant Inc</li>
                            <li className="businesses-dropdown-item">
                                <Link to="">Business name 2</Link>
                            </li>
                            <li className="businesses-dropdown-item">
                                <Link to="">Business name 3</Link>
                            </li>
                            <p className="add-business mb-0">Add a business</p>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-links">
                    <ul className="m-0 p-0">
                        <SidebarLink name="Accounts" link="/dashboard" Icon={AccountSvg}/>
                        <SidebarLink name="Transfer" link="" Icon={TransferSvg}/>
                        <SidebarLink name="Invoice" link="" Icon={InvoiceSvg}/>
                        <SidebarLink name="Management" link="" Icon={WandSvg}/>
                        <SidebarLink name="Security" link="" Icon={WandSvg}/>
                        <SidebarLink name="Support" link="" Icon={WandSvg}/> 
                    </ul>
                </div>
                <Link to="" className="foot-logo">
                    <img src={ProspaLogoImg} alt="" />
                </Link>
            </div>
            
        </Sidebar>
    );
}

export default Index;


