import { useSelector } from "react-redux";
import ServiceMessage from "./service-message";

// Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PremiumDetails = () => {

    const { user,company} = useSelector((state) => state.auth);
    

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

    return (
        <div>
            <h1 className="amt_txt">
                $12,000/Annually
            </h1>

            <p className="sub_detail_sm_txt">
                Next billing: {company && company.subscription && company.subscription.length > 0 && company.subscription[0].expiration} <br/>
                Payment method: {company && company.subscription && company.subscription.length > 0 && company.subscription[0].paymentMethod}
            </p>

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


         {company && company.subscription.length > 0 &&
            <ServiceMessage />
         }


        </div>
    )
}

export default PremiumDetails;
