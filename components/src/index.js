import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Tom"
                    time="Today at 6pm"
                    comment="Nice blog post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Dick"
                    time="Today at 9pm"
                    comment="Agree with the points made"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Harry"
                    time="Yesterday at 6pm"
                    comment="Nice writing"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
