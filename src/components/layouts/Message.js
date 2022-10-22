//  React Hook
import { useEffect, useState } from "react"

//  CSS Styles
import style from "./Message.module.css"

//  Message System
function Message({type, msg}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        
        if(!msg) {
            setVisible(false);
            return;
        };

        setVisible(true);

        //  Loading emulations
        const timer = setTimeout(() => {
            setVisible(false);
        },2000);

        return () => clearTimeout(timer);

    }, [msg]);

    //  Message JSX
    return(
        <>
            {visible && (<div className={`${style.msg} ${style[type]}`}>{msg}</div>)}
        </>
        
    );
};

export default Message;