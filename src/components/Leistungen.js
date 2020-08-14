import React, {useState} from "react";
import "./leistungen.css";
import NeuanlageImage from "./../images/neuanlage.png"
import PflasterImage from "./../images/pflaster.png"
import PflegeImage from "./../images/pflege.png"
import TeichImage from "./../images/teich.png"
import TerasseImage from "./../images/terasse.png"
import ZaunImage from "./../images/zaun.png"
import { useTransition, useSpring,  animated } from 'react-spring'

const Leistungen = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const listItems = ["Neuanlage", "Pflasterarbeiten", "Holzterassen", "Einzäungen", "Pflegearbeiten", "Teichanlagen"];
    const listImages = [NeuanlageImage, PflasterImage, TerasseImage, ZaunImage, PflegeImage, TeichImage];
    const paragraph = "Enim ex aliquip magna eu duis. Proident proident ad excepteur proident adipisicing commodo. Eu ad culpa nostrud pariatur fugiat tempor. Sunt qui in anim consequat culpa mollit velit commodo pariatur ipsum veniam.";
    const transitionItems = [
        ({style}) => <LeistungItem style={{...style}} title={listItems[0]} paragraph={paragraph} image={listImages[0]}/>,
        ({style}) => <LeistungItem style={{...style}} title={listItems[1]} paragraph={paragraph} image={listImages[1]}/>,
        ({style}) => <LeistungItem style={{...style}} title={listItems[2]} paragraph={paragraph} image={listImages[2]}/>,
        ({style}) => <LeistungItem style={{...style}} title={listItems[3]} paragraph={paragraph} image={listImages[3]}/>,
        ({style}) => <LeistungItem style={{...style}} title={listItems[4]} paragraph={paragraph} image={listImages[4]}/>,
        ({style}) => <LeistungItem style={{...style}} title={listItems[5]} paragraph={paragraph} image={listImages[5]}/>,
    ]
    const transitions = useTransition(selectedItem, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' , position: "absolute"},
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' , position: "relative"},
        leave: { opacity: 0, transform: 'translate3d(-100%,0,0)', position: "absolute",display: "none" },
    })
    const listItemOnClickHandler = (i) =>{
        return () => setSelectedItem(i);
    }
    return(
        <div className="sectionComponent component_leistungen">
            <div className="sectionWrapper leistungen_wrapper">
                <h3 className="sectionTitle leistungen_h3">Unsere Leistungen</h3>
                <div className="leistungen_cardWrapper">
                    <LeistungBar 
                        listItems = {listItems} 
                        selectedItem = {selectedItem}
                        listItemOnClickHandler = {listItemOnClickHandler}
                    />
                    <div className="leistungen_transitionWrapper">
                    {
                        transitions.map(({item, props, key}) =>{
                            const Page = transitionItems[item];
                            return <Page key={key} style={props} />
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

const LeistungBar = ({listItems, selectedItem, listItemOnClickHandler}) =>{
    return(
        <div className="component_leistungBar">
            <div className="leistungBar_listWrapper">
                {
                    listItems.map((el,i) => {
                        return(
                            <li title={el} onClick={listItemOnClickHandler(i)} className={(selectedItem === i) ? "leistungBar_listItem selected" : "leistungBar_listItem"} key={i}>{el}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

const LeistungItem = ({paragraph, style, image}) =>{
    return(
        <animated.div style={style} className="component_leistungItem">
            <div className="leistungItem_5050">
                <div className="leistungItem_5050_content left">
                    <p>{paragraph}</p>
                </div>
                <div className="leistungItem_5050_content right">
                    <img src={image}/>
                </div>
            </div>
        </animated.div>
    )
}

export default Leistungen;