import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import NotificationImg from '../../../assets/img/notification-bell.svg'
import AvatarImg from '../../../assets/img/avatar.png';
import MenuImg from '../../../assets/img/menu.svg';
import CancelImg from '../../../assets/img/cancel.svg';
import UndoImg from '../../../assets/img/undo.svg';
import {Wrapper} from './style';

const Index = ({handleSidebar, showSidebar}) => {
    return (
        <Wrapper className="topbar">
            <div className=" d-flex justify-content-between align-items-center tb-content mx-auto">
                <div className={`nav-icon d-md-none`}>
                    {
                        !showSidebar
                        ?<img src={MenuImg} alt="" className="open-menu" onClick={handleSidebar}/>
                        :<img src={CancelImg} alt="" className="close-menu" onClick={handleSidebar}/>
                    }
                    
                </div>
                <Link to="">
                    <h3 className="mb-0">Dashboard</h3>
                </Link>
                <div className="user d-flex align-items-center">
                    <div className="notification">
                        <img src={NotificationImg} alt="" className="notitification-icon"/>
                    </div>
                    <div className="avatar">
                        <img src={AvatarImg} alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Index;

Index.propTypes ={
    name:PropTypes.string.isRequired,
    showSidebar:PropTypes.bool.isRequired,
    handleSidebar:PropTypes.func.isRequired,
}