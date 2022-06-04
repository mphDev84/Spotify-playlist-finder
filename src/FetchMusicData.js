import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./SearchBar";
import styled from 'styled-components';
import DisplayMusicData from "./DisplayMusicData";

const MyText = styled.header`
margin:20px 0px 0px 0px;
padding:5px 10px 5px 10px;
color:black;
font-family:Georgia;
letter-spacing:4px;
text-decoration:underline;
font-size:25px;
background-color:rgba(255, 255, 255, 0.5);
border-radius:10px;
text-align:center;
width:fit-content;
`;

const MyHeaderWrapper = styled.div`
display:flex;
justify-content:center;
align-items:end;
`;

let myCounter=0;
const FetchMusicData = ()=>{

    const [artistNameValue, setArtistNameValue] = useState('')

    //define local state to store API artist data
    const [myFetchDataUri_0, setMyFetchDataUri_0]=useState(null)
    const [myFetchDataName_0, setMyFetchDataName_0]=useState(null)
    const [myFetchDataDesc_0, setMyFetchDataDesc_0]=useState(null)

    const [myFetchDataUri_1, setMyFetchDataUri_1]=useState(null)
    const [myFetchDataName_1, setMyFetchDataName_1]=useState(null)
    const [myFetchDataDesc_1, setMyFetchDataDesc_1]=useState(null)

    const [myFetchDataUri_2, setMyFetchDataUri_2]=useState(null)
    const [myFetchDataName_2, setMyFetchDataName_2]=useState(null)
    const [myFetchDataDesc_2, setMyFetchDataDesc_2]=useState(null)
    
    //get state data (artist name) from UserContext
    const state = useContext(UserContext);
    const artistName=state;
    console.log(artistName); 

    //function to fetch data from music API, using the artist name provided by the app user

    const myFetchFunction = ()=>{
 
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': 'key goes here'
            }
        };
        
        fetch('https://spotify23.p.rapidapi.com/search/?q='+artistName+'&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
            .then(response => response.json())
            .then(response => 
                {

                const myFetchDataUri_0 =response["playlists"]["items"][0]["data"]["uri"]; 
                const myFetchDataName_0 =response["playlists"]["items"][0]["data"]["name"];  
                const myFetchDataDesc_0 =response["playlists"]["items"][0]["data"]["description"];   

                const myFetchDataUri_1 =response["playlists"]["items"][1]["data"]["uri"]; 
                const myFetchDataName_1 =response["playlists"]["items"][1]["data"]["name"];  
                const myFetchDataDesc_1 =response["playlists"]["items"][1]["data"]["description"];

                const myFetchDataUri_2 =response["playlists"]["items"][2]["data"]["uri"]; 
                const myFetchDataName_2 =response["playlists"]["items"][2]["data"]["name"];  
                const myFetchDataDesc_2 =response["playlists"]["items"][2]["data"]["description"];

                console.log(myFetchDataUri_0);

                setMyFetchDataUri_0(myFetchDataUri_0);
                setMyFetchDataName_0(myFetchDataName_0);
                setMyFetchDataDesc_0(myFetchDataDesc_0);

                setMyFetchDataUri_1(myFetchDataUri_1);
                setMyFetchDataName_1(myFetchDataName_1);
                setMyFetchDataDesc_1(myFetchDataDesc_1);

                setMyFetchDataUri_2(myFetchDataUri_2);
                setMyFetchDataName_2(myFetchDataName_2);
                setMyFetchDataDesc_2(myFetchDataDesc_2);

                myCounter++;
        })
            .catch(err => console.error(err));
    };


   console.log(myFetchDataUri_0)
    //above function is called ONLY if state is not 'falsey' - i.e. only when state has a value (artist name)
    if(artistName!==''){
    myFetchFunction();
    }
    return (
        <>
        <MyHeaderWrapper>
        <img className="image-icon" src="https://img.icons8.com/glyph-neue/64/000000/bass-clef.png"/>
        <img className="image-icon" src="https://img.icons8.com/glyph-neue/64/000000/musical-notes.png"/>
        <img className="image-icon" src="https://img.icons8.com/color/48/000000/rock-music.png"/>
        <MyText>Showing Playlists for {artistName}:</MyText>
        <img className="image-icon" src="https://img.icons8.com/color/48/000000/rock-music.png"/>
        <img className="image-icon" src="https://img.icons8.com/glyph-neue/64/000000/musical-notes.png"/>
        <img className="image-icon" src="https://img.icons8.com/glyph-neue/64/000000/bass-clef.png"/>
        </MyHeaderWrapper>    
        <DisplayMusicData 

        dataUri_0={myFetchDataUri_0} 
        dataName_0={myFetchDataName_0} 
        dataDesc_0={myFetchDataDesc_0}
        dataUri_1={myFetchDataUri_1} 
        dataName_1={myFetchDataName_1} 
        dataDesc_1={myFetchDataDesc_1}
        dataUri_2={myFetchDataUri_2} 
        dataName_2={myFetchDataName_2} 
        dataDesc_2={myFetchDataDesc_2}

        />
        </>
    )
};

export default FetchMusicData;

/**      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(json=>{
            console.log("First user in the array:");
            console.log(json[0]);
            console.log("Name of the first user in array:");
            console.log(json[0].name);
            const myFetchData =json[0].name;
            setMyFetchData(myFetchData)
           myCounter++;
        })
 */
