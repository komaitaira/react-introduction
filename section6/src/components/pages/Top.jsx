import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
export const Top = () => {
    const navigate = useNavigate();
    const setUserInfo = useSetRecoilState(userState)
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate("/users", { isAdmin: true });
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate("/users", { isAdmin: false });
    };
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>
                管理者ユーザー
            </SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>
                一般ユーザー
            </SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
