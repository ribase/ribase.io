import Image from "next/image";

export default function Front() {
    // @ts-ignore
    return (
        <>
            <div className={"image--overlay"} style={{background: "url(/bmx.jpg) center / cover"}}>
                <div className="wrapper">
                    <div></div>
                    <div className="circletag" id="nay">
                        <Image fill={true} src={"/me.jpg"} alt={"blah"} />
                    </div>
                    <h1 className="typing-demo">
                        Hello, I&apos;m Sebastian
                    </h1>
                </div>
            </div>
        </>
    )
}