// default imports
import React, { useEffect, useState } from "react";

// libraries
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

// components
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import {
    SideBarChats,
    SideBarContainer,
    SideBarHeader,
    SideBarHeaderRight,
    SideBarSearch,
    SideBarSearchContainer,
} from "./SidebarStyled";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    // eslint-disable-next-line 
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <SideBarContainer>
            <SideBarHeader>
                <Avatar src={user?.photoURL} />
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
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat
                        key={room.id}
                        id={room.id}
                        name={room.data.name}
                    />
                ))}
            </SideBarChats>
        </SideBarContainer>
    );
}

export default Sidebar;
