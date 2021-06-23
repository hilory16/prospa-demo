import PropTypes from 'prop-types'
const OutflowItem = ({name, amount, icon}) => {
    return (
        <li className="d-flex align-items-center justify-content-between">
            <div className="outflow-type d-flex align-items-end ">
                <img src={icon} alt="" className="cashflow-icon" />
                <p className="mb-0 cashflow-name">{name}</p>
            </div>

            <div className="outflow-value">
                <p className="mb-0 amount">- N 250,000</p>
                <div className="bar">
                    <div className="bar-content"></div>
                </div>
            </div>
        </li>
    );
}

export default OutflowItem;

OutflowItem.propTypes ={
    name:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    icon:PropTypes.object.isRequired,
}