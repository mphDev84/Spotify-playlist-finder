import React from "react";
import styled from "styled-components";

//style header component with styled-components library
const TitleWrapper = styled.div`
background-color:black;
`;

const Title = styled.h1`
color:white;
font-size:55px;
font-family:Georgia;
text-align:center;
padding:20px 0px 0px 0px;
`;

const SubHeader = styled.p`
color:red;
font-size:20px;
text-align:center;
font-family:monospace;
padding:0px 0px 20px 0px;
`;

const Header = ()=>{
    return (
        <>
        <TitleWrapper>
        <Title>My Music App!</Title>
        <SubHeader>Search for playlists by artist:</SubHeader>
        </TitleWrapper>
        </>
    )
};

export default Header;