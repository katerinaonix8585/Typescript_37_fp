import "./styles.css";
import Button from "components/Button/Button";
import { FeedbackProps } from "./type";

function Feedback({likeValue, dislikeValue, addLike, addDislike, resetResults} : FeedbackProps) {

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <Button name="Like" onButtonClick={addLike} />
          <div className="result">{likeValue}</div>
        </div>
        <div className="like-dislike-container">
          <Button name="Dislike" onButtonClick={addDislike} />
          <div className="result">{dislikeValue}</div>
        </div>
      </div>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </div>
  );
}

export default Feedback;
