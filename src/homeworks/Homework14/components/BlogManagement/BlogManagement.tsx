import React, { ChangeEvent, createContext, useContext, useState } from "react";
import TextArea from "components/TextArea/TextArea";
import Button from "components/Button/Button";
import Card from "../Card/Card";
import { BlogManagementWrapper, ButtonWrapper } from "./styles";


export const PostedMessageContext = createContext<string>("");

function BlogManagement() {
   const [message, setMessage] = useState("");
   const [showCard, setShowCard] = useState(false);
   const [postedMessage, setPostedMessage] = useState("");

   const textAreaContent = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
    console.log(message)
  }  
   

  const posted = () => {
    setShowCard(true);  
    setPostedMessage(message);  
  };  

  return (
    <PostedMessageContext.Provider value={postedMessage}>
      <BlogManagementWrapper>
        <TextArea
          placeholder=""
          name="textAreaPosted"
          label=""
          value={message}
          onInputChange={textAreaContent}
        />
        <ButtonWrapper>
          <Button name="Запостить" onButtonClick={posted} />
        </ButtonWrapper>
        {showCard && <Card />}
      </BlogManagementWrapper>
    </PostedMessageContext.Provider>
  );
}

export default BlogManagement;
