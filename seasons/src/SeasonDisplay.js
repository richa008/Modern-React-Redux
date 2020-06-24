import React from "react";
import "./SeasonDisplay.css"; // webpack adds this to index.html

const SeasonConfig = {
    summer: {
        text: "It's summer, it is hot!",
        iconName: "sun",
    },
    winter: {
        text: "It's winter, it is cold!",
        iconName: "snowflake",
    },
};

const getSeason = (lat, month) => {
    if (month > 2 || month < 9) {
        return lat > 0 ? "summer" : "winter";
    }

    return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
