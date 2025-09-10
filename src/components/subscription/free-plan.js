import SubscriptionHeader from "./subscription-header";

// Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const features = [
    { 
        id: 'premium_features', 
        text: 'All Premium Features', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'email_reminder', 
        text: 'Email Reminders', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'annual_plan', 
        text: '20% Off Annual Plan', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'concierge_support', 
        text: 'Concierge Support', 
        icon: IoIosCheckmarkCircleOutline 
    },
];

const FreePlan = () => {

    return (
        <div>
            <div className="plan_row proper_box">
                <SubscriptionHeader 
                    title="Annual Plan"
                    hide
                />

                <h1 className="amt_txt">
                    $12,000/Annually
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
                    className="long_btn"
                    disabled
                    aria-disabled="true"
                    style={{ background: '#f3f4f6', color: '#9ca3af', cursor: 'not-allowed', marginTop: 12 }}
                >
                    Change to Annually
                </button>
            </div>
        </div>
    )
}

export default FreePlan;
