export default function SkateboardComponent({ animationType } : {animationType: string}) {
    return (
        <div>
            <div className="wrapper">
                <div className={"board " + animationType}>
                    <div className="board__body board__body--back">
                        <div className="board__side board__side--left"></div>
                        <div className="board__center"></div>
                        <div className="board__side board__side--right"></div>
                    </div>
                    <div className="board__body board__body--front">
                        <div className="board__side board__side--left"></div>
                        <div className="board__center"></div>
                        <div className="board__side board__side--right"></div>
                    </div>
                    <div className="board__tires">
                        <div className="board__tire"><span></span></div>
                        <div className="board__tire"><span></span></div>
                        <div className="board__tire"><span></span></div>
                        <div className="board__tire"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}