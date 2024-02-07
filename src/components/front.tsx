import Image from "next/image";
import React, {useState} from "react";
import Easteregg from "@/components/fragments/easteregg";

export default function Front() {
    const [components, setComponents] = useState(["Sample Component"]);

    const revealEgg = () => {
        setComponents([...components, "Sample Component"])
    }

    // @ts-ignore
    return (
        <>
            {components.map((item, i) => ( <Easteregg /> ))}

            <div className={"image--overlay"} style={{background: "url(/bmx.jpg) center / cover"}}>
                <div className="wrapper">
                    <div></div>
                    <div className="circletag" id="nay" onClick={revealEgg}>
                        <Image fill={true} src={"/me.jpg"} alt={"blah"}
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