import React, { useState } from "react";
/*

useState is a hook thats used in functional components.

Functional component
Initialization - useState(0)
Reference - activeIndex
Updates - setActiveIndex(10)

Class Components
Initialization - state = {activeIndex: 0}
Reference - this.state.activeIndex
Updates - this.setState({activeIndex: 10})

*/
const Accordion = ({ items }) => {
    
    const [activeIndex, setActiveIndex] = useState(null); // null is initial value

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {

        const active = (activeIndex === index) ? "active" : "";

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
