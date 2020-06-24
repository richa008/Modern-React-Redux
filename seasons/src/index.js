import React from "react";
import ReactDOM from "react-dom";
import SessionDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    getContent() {
        if (!this.state.lat && !this.state.errorMessage) {
            return <Spinner />;
        } else if (!this.state.lat) {
            return <div> {this.state.errorMessage}</div>;
        }

        return <SessionDisplay lat={this.state.lat}></SessionDisplay>;
    }

    render() {
        return <div>{this.getContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
