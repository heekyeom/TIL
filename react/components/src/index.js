import React, { Fragment } from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";

const App = () => {
  return (
    <Fragment>
      <Segment>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="pdf file outline icon">No document</i>
          </div>
          <div className="ui primary button">Add doc</div>
        </div>
      </Segment>
      <Segment>
        <div className="ui placeholder segment">
          <h4 className="ui header">No document</h4>
          <p>Add doc</p>
        </div>
      </Segment>

      <Message header="이용 약관 변경 안내" body="동의 할래요?" />
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            time={faker.date.recent().toLocaleTimeString()}
            avatar={faker.image.avatar()}
            comment={faker.lorem.sentence()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            time={faker.date.recent().toLocaleTimeString()}
            avatar={faker.image.avatar()}
            comment={faker.lorem.sentence()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            time={faker.date.recent().toLocaleTimeString()}
            avatar={faker.image.avatar()}
            comment={faker.lorem.sentence()}
          />
        </ApprovalCard>
      </div>
    </Fragment>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
