import "./styles.ts";
import Button from "components/Button/Button";
import { FeedbackProps } from "./types";
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result } from "./styles";

function Feedback({likeValue, dislikeValue, addLike, addDislike, resetResults} : FeedbackProps) {

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <Result>{likeValue}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="Dislike" onButtonClick={addDislike} />
          <Result>{dislikeValue}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
