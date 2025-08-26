
// icons
import { IoIosInformationCircleOutline } from "react-icons/io";

const ServiceMessage = () => {

    return (
        <div className="service_message">
            <IoIosInformationCircleOutline />
            <span>
                Your subscription will renew automatically on 
                <strong>February 25, 2025</strong>.
            </span>
        </div>
    )
}

export default ServiceMessage;
