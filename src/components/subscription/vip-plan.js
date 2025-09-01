import SubscriptionHeader from "./subscription-header";

// Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const features = [
    { 
        id: 'all_premium', 
        text: 'All Premium Features', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'personal_barber', 
        text: 'Personal Barber Assignment', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'home_service', 
        text: 'Home Service Option', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'concierge_support', 
        text: 'Concierge support', 
        icon: IoIosCheckmarkCircleOutline 
    },
];

const VipPlan = () => {

    return (
        <div>
            <div className="plan_row proper_box">
                <SubscriptionHeader 
                    title="Monthly Plan"
                    hide
                    popular
                />
                
                <h1 className="amt_txt">
                    $1250/Month
                </h1>

                <div className="space_up_md">
                    {features.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div key={f.id} className="flex_display" style={{ marginBottom: 8 }}>
                                <Icon style={{ marginRight: "8px" }} />
                                <p style={{ margin: 0, fontSize: 14 }}>{f.text}</p>
                            </div>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="long_btn btn-vip"
                    aria-label="Downgrade"
                    style={{ marginTop: 12 }}
                >
                    Upgrade to VIP
                </button>
            </div>
        </div>
    )
}

export default VipPlan;
