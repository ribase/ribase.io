import Image from "next/image";
import React, {useState} from "react";
import FormRange from "react-bootstrap/FormRange";
import Easteregg from "@/components/fragments/easteregg";

export default function Front() {

    const [show, setShow] = useState(false);
    const eggContainer: any = React.createRef();

    const toggleEgg = () => {
        setShow(currentShow => !currentShow);
        if(eggContainer.current.style.display === "block") {
            eggContainer.current.style.display = "none"
        } else {
            eggContainer.current.style.display = "block"
        }
    }

    // @ts-ignore
    return (
        <>
            <div className={"easter--egg"}>
                <div className={"easter--egg--container"} ref={eggContainer}>
                    <div className={"close--egg p-5"} onClick={toggleEgg}>
                        <h2>X</h2>
                    </div>
                    { show ? <Easteregg /> : null }
                </div>
            </div>
            <div className={"image--overlay"} style={{background: "url(/ribase.io/bmx.jpg) center / cover"}}>
                <div className="wrapper">
                    <div></div>
                    <div className="circletag" id="nay" onClick={toggleEgg}>
                        <Image fill={true} src={"/ribase.io/me.jpg"} alt={"blah"}
                               sizes="{(max-width: 768px) 200p, (max-width: 1200px) 300px}"/>
                    </div>
                    <h1 className="typing-demo">
                        Hello, I&apos;m Sebastian
                    </h1>
                </div>
            </div>
        </>
    )
}