// default imports
import React, { useEffect, useState } from "react";

// libraries
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

// styled components
const SidebarChatContainer = styled.div`
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

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for the chat room");

        if (roomName) {
            // do some stuff
        }
    };

    return !addNewChat ? (
        <SidebarChatContainer>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <SidebarChatInfo>
                <h2>Room name</h2>
                <p>Last message...</p>
            </SidebarChatInfo>
        </SidebarChatContainer>
    ) : (
        <SidebarChatContainer onClick={createChat}>
            <h2>Add new chat</h2>
        </SidebarChatContainer>
    );
}

export default SidebarChat;
