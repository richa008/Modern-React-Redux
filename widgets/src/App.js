import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is coronavirus?",
        content:
            "Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.",
    },
    {
        title: "What is Covid-19",
        content:
            "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.",
    },
    {
        title: "What are the symptoms of Covid-19?",
        content:
            "The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Other symptoms that are less common and may affect some patients include aches and pains, nasal congestion, headache, conjunctivitis, sore throat, diarrhea, loss of taste or smell or a rash on skin or discoloration of fingers or toes. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.",
    },
];

const options = [
    {
        label: "Red",
        value: "red",
    },
    {
        label: "Green",
        value: "green",
    },
    {
        label: "Blue",
        value: "blue",
    },
];

function App() {

    return (
        <div className="App">
            <Translate />
        </div>
    );
}

export default App;
