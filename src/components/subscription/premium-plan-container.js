import SubscriptionHeader from "./subscription-header";
import PremiumDetails from "./premium-details";
import LongButtonList from "./long-btn-list";

const PremiumPlanContainer = () => {

    return (
        <div className="plan_row proper_box">
            <SubscriptionHeader />
            <div className="plan_split">
                    <div className="plan_split_column">
                        <PremiumDetails />
                    </div>
                    <div className="plan_split_column">
                        <LongButtonList />
                    </div>
            </div>
        </div>
    )
}

export default PremiumPlanContainer;
