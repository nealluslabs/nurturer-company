
// icons
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const ServiceMessage = () => {

    const { user,company} = useSelector((state) => state.auth);
    return (
        <div className="service_message">
            <IoIosInformationCircleOutline />
            <span>
                Your subscription will renew automatically on 
                <strong>{company? company.subscriptionExpiration:"February 25, 2025"}</strong>.
            </span>
        </div>
    )
}

export default ServiceMessage;
