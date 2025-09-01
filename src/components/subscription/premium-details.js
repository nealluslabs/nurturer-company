import ServiceMessage from "./service-message";

// Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PremiumDetails = () => {

    const features = [
        { 
            id: 'priority', 
            text: 'Priority booking', 
            icon: IoIosCheckmarkCircleOutline 
        },
        { 
            id: '20%_off', 
            text: '20% off all services', 
            icon: IoIosCheckmarkCircleOutline 
        },
        { 
            id: 'free_product', 
            text: 'Free product samples', 
            icon: IoIosCheckmarkCircleOutline 
        },
        { 
            id: 'exclusive_member', 
            text: 'Exclusive member events', 
            icon: IoIosCheckmarkCircleOutline 
        },
    ];

    return (
        <div>
            <h1 className="amt_txt">
                $12,000/Year
            </h1>

            <p className="sub_detail_sm_txt">
                Next billing: February 25, 2025 <br/>
                Payment method: Visa **** 1234
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

            <ServiceMessage />
        </div>
    )
}

export default PremiumDetails;
