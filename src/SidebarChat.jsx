// default imports
import React, { useEffect, useState } from "react";

// libraries
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import db from "./firebase";

// styled components
const SidebarChatContainer = styled.div`
    & > a {
        text-decoration: none;
        color: black;
    }
`;

const SidebarChatInnerContainer = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`;

const SidebarChatInfo = styled.div`
    margin-left: 15px;

    & > h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }
`;

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for the chat room");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <SidebarChatContainer>
            <Link to={`/rooms/${id}`}>
                <SidebarChatInnerContainer>
                    <Avatar
                        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    />
                    <SidebarChatInfo>
                        <h2>{name}</h2>
                        <p>{messages[0]?.message}</p>
                    </SidebarChatInfo>
                </SidebarChatInnerContainer>
            </Link>
        </SidebarChatContainer>
    ) : (
        <SidebarChatInnerContainer onClick={createChat}>
            <h2>Add new chat</h2>
        </SidebarChatInnerContainer>
    );
}

export default SidebarChat;
