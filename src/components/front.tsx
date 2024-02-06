import Image from "next/image";
import React from "react";
import FormRange from "react-bootstrap/FormRange";
import {random} from "nanoid";

export default function Front() {
    let audio: any = null;
    let tvcontent: any = React.createRef();
    let tvchannel: any = React.createRef();
    let tvvolume: any = React.createRef();
    let easteregg: any = React.createRef();
    let tvpower: any = React.createRef();
    let tvBg = "black";
    let tvOn = false;

    const revealEgg = () => {
        easteregg.current.style.display="block";
    }
    const closeEgg = () => {
        easteregg.current.style.display="none";
        tvcontent.current.style.background="black";
        audio.pause();
        tvOn = false;
        tvpower.current.classList.remove("on");
        tvpower.current.classList.add("off");
    }

    const changeVolume = (volume: number) => {
        volume = volume/10;
        if (tvOn) {
            audio.volume = volume;
        }
    }

    const channels = [
        {
            background: "url(/vice_v3_0022_final.gif) center / cover",
            sound: "/miamivice.mp3",
        },
        {
            background: "url(/et.webp) center / cover",
            sound: "/et.mp3",
        }
    ]

    const changeChannel = (channel: number) => {
        if (!tvOn) {
            return;
        }
        const key = channel;
        audio.setAttribute('src',channels[key].sound);
        audio.load();
        tvcontent.current.style.background=channels[key].background;
        audio.volume = (tvvolume.current.value)/10
        audio.loop = true;
        audio.play();
        return;
    }

    const tvButton = async () => {
        const key = tvchannel.current.value;
        if (audio !== null && !audio.paused) {
            tvcontent.current.style.background="black";
            audio.pause();
            tvOn = false;
            tvpower.current.classList.remove("on");
            tvpower.current.classList.add("off");
            return;
        } else if (audio !== null && audio.paused && audio.currentTime > 0) {
            audio.setAttribute('src',channels[key].sound);
            audio.load();
            tvcontent.current.style.background=channels[key].background;
            audio.play();
            tvpower.current.classList.remove("off");
            tvpower.current.classList.add("on");
            tvOn = true;
            return;
        } else {
            audio = new Audio();
            audio.setAttribute('src',channels[key].sound);
            audio.load();
            tvcontent.current.style.background=channels[key].background;
            audio.volume = 0.1
            audio.loop = true;
            audio.play();
            tvOn = true;
            tvpower.current.classList.remove("off");
            tvpower.current.classList.add("on");
            return;
        }
    }

    // @ts-ignore
    return (
        <>
            <div className={"easter--egg"} ref={easteregg}>
                <div className={"close--egg p-5"} onClick={closeEgg}>
                    <h2>X</h2>
                </div>
                <div className={"easter--egg--container"}>
                    <div className="old-tv">
                        <main>
                            <div className="error-noise">
                                <div className="error-effect">
                                    <div className="old-tv-content" ref={tvcontent} style={{background: tvBg}}></div>
                                </div>
                            </div>
                        </main>
                        <div className="speaker"></div>
                        <div className="volume">
                            <FormRange min={"0"} max={"10"} step={"1"} defaultValue={"1"} ref={tvvolume}
                                       onChange={(event) => changeVolume(parseInt(event.target.value))}/>
                        </div>
                        <nav className="channel">
                            <FormRange min={"0"} max={"1"} step={"1"} defaultValue={"0"} ref={tvchannel}
                                       onChange={(event) => changeChannel(parseInt(event.target.value))}/>
                        </nav>
                        <nav className="power off" ref={tvpower}>
                            <button onClick={tvButton}></button>
                        </nav>
                        <nav></nav>
                        <footer></footer>
                    </div>
                </div>
            </div>
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