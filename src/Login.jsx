// default import
import React from "react";

// libraries
import { Button } from "@material-ui/core";
import styled from "styled-components";

// components
import { auth } from "./firebase";
import { provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`;
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

    & > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;
const LoginText = styled.div``;
const LoginImg = styled.img`
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
`;

function Login() {
    // eslint-disable-next-line 
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <LoginImg
                    src="https://www.herzog.ac.il/wp-content/uploads/2017/11/whatsapp-icon-logo-vector.png"
                    alt=""
                />
                <LoginText>
                    <h1>Sign in to whatspp</h1>
                </LoginText>

                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;
