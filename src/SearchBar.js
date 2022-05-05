import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { useRef } from "react";
import FetchMusicData from "./FetchMusicData";

const SearchBarDiv = styled.div`
display:flex;
flex-direction:column;
background-color:lightblue;
padding:10px 0px 10px 0px;
align-items:center;
`;

const SearchBarForm=styled.form`

`;

const SearchBarSpan = styled.span`
font-family:monospace;
font-size:20px;
color:darkblue;
`;

const SearchBarInput = styled.input`
padding:8px 10px 8px 10px;
border-radius:15px;
width:400px;
`;

const Button = styled.button`
margin-left: 10px;
width:40px;
height:30px;
font-family:Georgia;
letter-spacing:2px;
border:dashed green 2px;
border-radius:20px;
&:hover {
    cursor:pointer;
    transform:scale(1.2);
}
`;
const RefreshButton=styled.button`
margin-left: 20px;
width:90px;
height:30px;
font-family:Georgia;
letter-spacing:2px;
border:dashed red 2px;
border-radius:20px;
&:hover {
    cursor:pointer;
    transform:scale(1.2);
}
`;

//create a useContext variable
export const UserContext = createContext();

const SearchBar = ()=>{

    //this function is called once form data is submitted
    const populateStateData=(e)=>{
    
    e.preventDefault();
    const artistNameValue = inputRef.current.value;
    console.log(artistNameValue);
    setArtistName(artistNameValue);
    console.log(artistName);
    e.currentTarget.reset();
    };

    const inputRef= useRef();
    const [artistName, setArtistName]=useState('');

    const windowRefresh=()=>{
        return window.location.reload();
      };

    return (
        <UserContext.Provider value={artistName}>
        <SearchBarDiv>
        <SearchBarForm onSubmit={populateStateData}>
           <SearchBarSpan>Search Artist/Genre:</SearchBarSpan>
           <SearchBarInput className='input' type="text" name="artistName" ref={inputRef} placeholder='enter artist name'/>
           <Button className='user-form-submit-button' type="submit" value="submit">Go!</Button>
           <RefreshButton onClick={windowRefresh}>Refresh</RefreshButton>
       </SearchBarForm>
       </SearchBarDiv>
       <FetchMusicData />
   </UserContext.Provider>
    )
};

export default SearchBar;