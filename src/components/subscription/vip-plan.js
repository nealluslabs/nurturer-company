import SubscriptionHeader from "./subscription-header";

// Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const features = [
    { 
        id: 'all_basic', 
        text: 'All Basic Features', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: 'email_reminders', 
        text: 'Email Reminders', 
        icon: IoIosCheckmarkCircleOutline 
    },
    { 
        id: '247_support', 
        text: '24/7 Support', 
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
                    $1,250/Monthly
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
                    className="long_btn btn-vip bg-[#20dbe4] !bg-[#20dbe4]"
                    aria-label="Downgrade"
                    style={{ marginTop: 12 }}
                >
                    Change To Monthly
                </button>
            </div>
        </div>
    )
}

export default VipPlan;
