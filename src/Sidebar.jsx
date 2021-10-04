// default imports
import React from "react";

// libraries
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

// components
import SidebarChat from "./SidebarChat";
import {
    SideBarChats,
    SideBarContainer,
    SideBarHeader,
    SideBarHeaderRight,
    SideBarSearch,
    SideBarSearchContainer,
} from "./SidebarStyled";

function Sidebar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <Avatar />
                <SideBarHeaderRight>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </SideBarHeaderRight>
            </SideBarHeader>
            <SideBarSearch>
                <SideBarSearchContainer>
                    <SearchOutlined />
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                    />
                </SideBarSearchContainer>
            </SideBarSearch>
            <SideBarChats>
                <SidebarChat addNewChat="true" />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </SideBarChats>
        </SideBarContainer>
    );
}

export default Sidebar;
