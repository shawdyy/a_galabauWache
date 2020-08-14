import React, {useEffect} from "react";
import "./opener.css";
import {useSpring, animated, config} from "react-spring";

const Opener = () => {
    return(
        <div className="component_opener">
            <div className="opener_half">
                <div className="opener_hWrapper">
                    <h2>Ihr Garten- & Landschaftsbau Partner im Duisburger Süden</h2>
                    <button>Kontaktieren Sie uns</button>
                </div>
            </div>
            <div className="opener_half" style={{justifyContent: "center"}}>
                <animated.div className="opener_mask">
                    <div title="Photo by Tim Cooper https://unsplash.com/@tcooper86?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" className="opener_background"></div>
                </animated.div>
            </div>
        </div>
    )
}

export default Opener;