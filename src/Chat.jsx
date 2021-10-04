// default imports
import React, { useEffect, useState } from "react";

// libraries
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { AttachFile, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const ChatContainer = styled.div`
    flex: 0.65;
    display: flex;
    flex-direction: column;
`;

const ChatHeader = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;

const ChatHeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;

    & > h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }

    & > p {
        color: gray;
    }
`;

const ChatHeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100px;
`;

const ChatBody = styled.div`
    flex: 1;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ChatMessage = styled.p`
    position: relative;
    font-size: 16px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 30px;

    &.chat__reciever {
        margin-left: auto;
        background-color: #dcf8c6;
    }
`;

const ChatName = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
`;

const ChatTimeStamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`;

const ChatFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;

    & > form {
        flex: 1;
        display: flex;

        & > input {
            flex: 1;
            border-radius: 30px;
            padding: 10px;
            border: none;
        }

        & > button {
            display: none;
        }
    }

    & > .MuiSvgIcon-root {
        padding: 10px;
        color: gray;
    }
`;

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        setInput("");
    };

    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <ChatHeaderInfo>
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </ChatHeaderInfo>
                <ChatHeaderRight>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </ChatHeaderRight>
            </ChatHeader>
            <ChatBody>
                <ChatMessage className={`${true && "chat__reciever"}`}>
                    <ChatName>Ratnakar</ChatName>
                    Hey Guys
                    <ChatTimeStamp>3:52pm</ChatTimeStamp>
                </ChatMessage>
                <ChatMessage className={`${false && "chat__reciever"}`}>
                    <ChatName>Ratnakar</ChatName>
                    Hey Guys
                    <ChatTimeStamp>3:52pm</ChatTimeStamp>
                </ChatMessage>
            </ChatBody>
            <ChatFooter>
                <InsertEmoticonIcon />
                <form>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send
                    </button>
                </form>
                <Mic />
            </ChatFooter>
        </ChatContainer>
    );
}

export default Chat;
