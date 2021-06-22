
const TransactionItem = ({desc, time,amount,icon}) => {
    return (
        <li className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src={icon} alt="" className="icon"/>
                <div className="desc">
                    <h6 className="mb-0">{desc}</h6>
                    <p className="mb-0">{time}</p>
                </div>
            </div>  
            <div className="amount">
                {amount}
            </div>
        </li>
    );
}

export default TransactionItem;
