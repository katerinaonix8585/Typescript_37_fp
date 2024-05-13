import React, { useContext } from "react";
import { MessageText, MessageWrapper } from "./styles";
import { PostedMessageContext } from "../BlogManagement/BlogManagement";

function Message () {
    const messageData = useContext(PostedMessageContext);    
    return (        
        <MessageWrapper>
            <MessageText>{messageData}</MessageText>
        </MessageWrapper>
    );
}

export default Message;
