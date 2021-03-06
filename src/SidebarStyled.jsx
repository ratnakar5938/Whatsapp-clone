// libraries
import styled from "styled-components";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.3;
    min-width: 300px;
    border-right: 1px solid lightgray;

    @media only screen and (max-width: 1604px) {
        flex: 0.35;
    }
    @media only screen and (max-width: 1110px) {
        flex: 0.4;
    }
    @media only screen and (max-width: 802px) {
        min-width: 90vw;
        border-right: none;
    }

`;

export const SideBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 20px;
    align-items: center;
`;

export const SideBarHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    & > .MuiSvgIcon-root {
        margin-right: 2vw;
        font-size: 24px !important;
    }
`;

export const SideBarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
`;

export const SideBarSearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;

    & > input {
        border: none;
        margin-left: 10px;
    }

    & > .MuiSvgIcon-root {
        color: gray;
        padding: 10px;
    }
`;

export const SideBarChats = styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
