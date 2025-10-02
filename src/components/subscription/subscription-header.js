import { IoDiamondOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const SubscriptionHeader = ({ title, hide, popular }) => {

    const { user,company} = useSelector((state) => state.auth);

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
                        className="plan_button bg-[#20dbe4] !bg-[#20dbe4]"
                    >Popular</p>
                }
            </div>

            {

                !hide && <p className="plan_button bg-[#20dbe4] !bg-[#20dbe4]">
                  {company && company.subscription && company.subscription.length > 0 ?
                    "Current Plan"
                    :
                    "Subscribe"
                 }
                    </p>
            }
        </div>
    )
}

export default SubscriptionHeader;
