import {Link} from 'react-router-dom'
import NotificationImg from '../../../assets/img/notification-bell.svg'
import AvatarImg from '../../../assets/img/avatar.png'
import {Wrapper} from './style';

const Index = () => {
    return (
        <Wrapper className="topbar">
            <div className=" d-flex justify-content-between align-items-center tb-content mx-auto">
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
