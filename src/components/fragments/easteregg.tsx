import FormRange from "react-bootstrap/FormRange";
import React, {useEffect} from "react";

export default function Easteregg() {

    let audio: any = null;
    let tvcontent: any = React.createRef();
    let tvchannel: any = React.createRef();
    let tvvolume: any = React.createRef();
    let tvpower: any = React.createRef();
    let tvBg = "black";
    let tvOn = false;


    useEffect(() => {
        return () => {
            if (audio !== null) {
                audio.pause();
            }

        }
    }, [])

    const changeVolume = (volume: number) => {
        volume = volume/10;
        if (tvOn) {
            audio.volume = volume;
        }
    }

    const channels = [
        {
            background: "url(/ribase.io/vice_v3_0022_final.gif) center / cover",
            sound: "/ribase.io/miamivice.mp3",
        },
        {
            background: "url(/ribase.io/et.webp) center / cover",
            sound: "/ribase.io/et.mp3",
        },
        {
            background: "url(/ribase.io/bttf.webp) center / cover",
            sound: "/ribase.io/bttf.mp3",
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

    return (
        <>
            <div className={"olf-tv--container"}>
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
                        <FormRange min={"0"} max={"2"} step={"1"} defaultValue={"0"} ref={tvchannel}
                                   onChange={(event) => changeChannel(parseInt(event.target.value))}/>
                    </nav>
                    <nav className="power off" ref={tvpower}>
                        <button onClick={tvButton}></button>
                    </nav>
                    <nav></nav>
                    <footer></footer>
                </div>
            </div>
        </>
    )
}