import React, { ChangeEvent, createContext, useContext, useEffect, useState } from "react";
import Button from "components/Button/Button";
import Card from "../Card/Card";
import { BlogManagementWrapper, ButtonWrapper, TextArea } from "./styles";


export const PostedMessageContext = createContext<string>("");

function BlogManagement() {
   const [message, setMessage] = useState<string>("");
   const [postedMessage, setPostedMessage] = useState<string>("");
   const [showCard, setShowCard] = useState<boolean>(false);
   

   const textAreaContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    console.log(message)
  };

  const posted = () => {
    setShowCard(true);  
    setPostedMessage(message);  
  };    


  console.log(message)
  console.log(postedMessage)

  return (
    <PostedMessageContext.Provider value={postedMessage}>
      <BlogManagementWrapper>
        <TextArea
          placeholder=""
          name="textAreaPosted"          
          value={message}
          onChange={textAreaContent}
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
