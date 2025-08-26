import PremiumPlanContainer from "src/components/subscription/premium-plan-container";
import FreePlan from "src/components/subscription/free-plan";
import VipPlan from "src/components/subscription/vip-plan";

const SubscriptionPage = () => {
    return (
        <div className="subscription_container">
            <div className="subscription_card">
                <h1 className="subscription_title">Subscription Plans</h1>

                <PremiumPlanContainer />
                <div className="plan_split" style={{ marginTop: 12 }}>
                    <div className="plan_split_column">
                        <FreePlan />
                    </div>
                    <div className="plan_split_column">
                        <VipPlan />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SubscriptionPage;
