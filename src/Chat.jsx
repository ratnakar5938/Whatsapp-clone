// default imports
import React, { useEffect, useState } from "react";

// libraries
import firebase from "firebase/app";
import { useParams } from "react-router";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { AttachFile, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

// components
import db from "./firebase";
import { useStateValue } from "./StateProvider";

const ChatContainer = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1604px) {
        flex: 0.65;
    }
    @media only screen and (max-width: 1110px) {
        flex: 0.6;
    }
    @media only screen and (max-width: 802px) {
        display: none;
        width: 90vw;
    }
`;

const ChatHeader = styled.div`
    padding: 6px 20px;
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
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    // eslint-disable-next-line 
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomName(snapshot.data().name);
                });

            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                });

            setSeed(Math.floor(Math.random() * 5000));
        }
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <ChatContainer>
            <ChatHeader>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <ChatHeaderInfo>
                    <h3>{roomName}</h3>
                    <p>
                        Last seen{" "}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                        ).toUTCString()}
                    </p>
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
                {messages.map((message) => (
                    <ChatMessage
                        className={`${
                            user.displayName === message.name &&
                            "chat__reciever"
                        }`}
                    >
                        <ChatName>{message.name}</ChatName>
                        {message.message}
                        <ChatTimeStamp>
                            {new Date(
                                message.timestamp?.toDate()
                            ).toUTCString()}
                        </ChatTimeStamp>
                    </ChatMessage>
                ))}
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
                <IconButton onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </ChatFooter>
        </ChatContainer>
    );
}

export default Chat;
