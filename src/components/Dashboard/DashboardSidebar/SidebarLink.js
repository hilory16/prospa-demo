import PropTypes from 'prop-types'
import {LinkWrapper} from './style';
import {NavLink} from 'react-router-dom'

const SidebarLink = ({name, link, Icon}) => {
    return (
        <LinkWrapper>
            <NavLink to={link} className="d-flex align-items-center" activeClassName="active-link" exact>
                <div className="link-icon">
                    <Icon/>
                </div>
                <span>{name}</span>
            </NavLink>
        </LinkWrapper>
    );
}

export default SidebarLink;

SidebarLink.propTypes ={
    name:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired,
    icon:PropTypes.object.isRequired,
}