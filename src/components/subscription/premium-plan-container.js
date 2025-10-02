import SubscriptionHeader from "./subscription-header";
import PremiumDetails from "./premium-details";
import LongButtonList from "./long-btn-list";
import { useSelector } from "react-redux";

const PremiumPlanContainer = () => {

    const { user,company } = useSelector((state) => state.auth);
      
    return (
        <div className="plan_row proper_box">
            <SubscriptionHeader title="Annual Plan" />
            <div className="plan_split">
                    <div className="plan_split_column">
                        <PremiumDetails />
                    </div>
                    <div className="plan_split_column">
                    {company && company.subscription && company.subscription.length > 0 &&
                        <LongButtonList />
                        }
                    </div>
            </div>
        </div>
    )
}

export default PremiumPlanContainer;
