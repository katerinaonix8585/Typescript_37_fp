import Feedback from "components/Feedback/Feedback";
import { useState } from "react";


function Homework07 (){
    
   const [like, setLike] = useState<number>(0);
   const [dislike, setDislike] = useState<number>(0);
        
   const addLike = (): void => {
   setLike((prevValue) => (prevValue + 1));
    };
        
    const addDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
   };
        
    const resetResults = (): void => {
    setLike(0);
    setDislike(0);
   };

   return <div>
        <Feedback likeValue={like} dislikeValue={dislike} addLike={addLike} addDislike={addDislike} resetResults={resetResults} />
    </div>


}

export default Homework07;