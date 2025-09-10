
const LongButtonList = () => {
    // Buttons defined with their text and colors
    const buttons = [
        { 
            id: 'vip', 
            text: 'Change to Monthly', 
            background: '#20dbe4', 
            color: '#ffffff' 
        },
        { 
            id: 'change_payment', 
            text: 'Change Payment Method', 
            background: '#dddddd', 
            color: '#000000' 
        },
        { 
            id: 'cancel_sub', 
            text: 'Cancel Subscription', 
            background: '#dddddd', 
            color: '#000000' 
        }
    ];

    return (
        <div className="long_btn_list">
            {buttons.map((b) => {
                // allow CSS class override or fall back to inline styles based on data
                const className = `long_btn ${b.className ? b.className : ''}`.trim();
                const style = b.background || b.color ? { background: b.background, color: b.color } : undefined;

                return (
                    <button
                        key={b.id}
                        className={className}
                        style={style}
                        aria-label={b.text}
                    >
                        {b.text}
                    </button>
                );
            })}
        </div>
    )
}

export default LongButtonList;
