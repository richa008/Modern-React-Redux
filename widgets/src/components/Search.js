import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    // console.log("I run with every render");

    const onChange = (term) => {
        setTerm(term);
    };

    // useEffect(() => {
    //     console.log("I run after initial render");
    // }, []);

    // useEffect(() => {
    //     console.log("I run after every render and at initial render");
    // });

    useEffect(() => {
        // console.log("I run after every render and at initial render and changes to elements in the array");

        const search = async () => {
            const { data } = await Axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                }
            );

            setResults(data.query.search);
        };

        if (term && results.length === 0) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                // console.log("Clean up run before re-rendering");
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {result.snippet}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search field</label>
                    <input
                        value={term}
                        onChange={(e) => onChange(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
