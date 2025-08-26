import { IoDiamondOutline } from "react-icons/io5";

const SubscriptionHeader = ({ title, hide, popular }) => {

    return (
        <div className="flex_display space_btw" style={{ alignItems: 'center' }}>
            <div className="flex_display">
                {
                    !popular && <IoDiamondOutline />
                }
                <h2 className="plan_name">
                    { title ? title : "Premium Plan" }
                </h2>
                {
                    popular && 
                    <p 
                        style={{ marginLeft: "8px" }} 
                        className="plan_button"
                    >Popular</p>
                }
            </div>

            {
                !hide && <p className="plan_button">Current Plan</p>
            }
        </div>
    )
}

export default SubscriptionHeader;
