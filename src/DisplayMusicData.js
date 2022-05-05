import React from 'react';
import styled from 'styled-components';

const PlaylistNameWrapper = styled.div`
display:flex;
flex-direction:row;
`;

const PlaylistName=styled.p`
color:white;
font-size:20px;
font-family:monospace;
margin-left:10px;
background-color:rgba(0,0,0, 0.3);
border-radius:10px;
width:fit-content;
`;

const PlaylistNameSpan=styled.p`
font-size:20px;
color:black;
font-family:georgia;
letter-spacing:2px;
background-color:rgba(255,255,255, 0.4);
width:fit-content;
padding:0px 10px 0px 10px;
border-radius:10px;
`;

const PlaylistUri=styled.header`
font-size:20px;
color:blue;
margin-left:10px;
`;

const PlaylistDesc=styled.header`
color:white;
font-size:20px;
font-family:Times New Roman;
letter-spacing:5px;
background-color:rgba(255,140,25, 0.6);
text-align:center;
`;

const SpanText=styled.span`
font-family:monospace;
font-size:15px;
color:white;
background-color:rgba(0,0,0,0.5);
border-radius:10px;
padding:0px 15px 0px 15px;
`;

const DescriptionSpanText=styled.p`
font-family:Courier;
font-size:20px;
text-align:left;
letter-spacing:1px;
color:white;
width:fit-content;
background-color:rgba(0,0,0, 0.4);
border-radius:10px;
padding:10px 15px 10px 15px;
`;

const DisplayMusicData = ({
    dataUri_0, 
    dataName_0, 
    dataDesc_0, 
    dataUri_1, 
    dataName_1, 
    dataDesc_1,
    dataUri_2, 
    dataName_2, 
    dataDesc_2})=>{

const myFetchDataUri_0 =dataUri_0;
const myFetchDataName_0 =dataName_0; 
const myFetchDataDesc_0 =dataDesc_0;

const myFetchDataUri_1 =dataUri_1;
const myFetchDataName_1 =dataName_1;
const myFetchDataDesc_1 =dataDesc_1;

const myFetchDataUri_2 =dataUri_2;
const myFetchDataName_2 =dataName_2;
const myFetchDataDesc_2 =dataDesc_2;


   console.log(myFetchDataDesc_0, myFetchDataName_0, myFetchDataUri_0);

    return (
        <>
        <PlaylistNameWrapper>
    <PlaylistName>Playlist Name:</PlaylistName> 
        <PlaylistNameSpan>{myFetchDataName_0}</PlaylistNameSpan>
        </PlaylistNameWrapper>
    <PlaylistUri><SpanText>{myFetchDataUri_0}</SpanText></PlaylistUri>
    <PlaylistDesc>Description:<DescriptionSpanText>{myFetchDataDesc_0}</DescriptionSpanText></PlaylistDesc><br></br>
        <PlaylistNameWrapper>
    <PlaylistName>Playlist Name:</PlaylistName> 
        <PlaylistNameSpan>{myFetchDataName_1}</PlaylistNameSpan>
        </PlaylistNameWrapper>
    <PlaylistUri><SpanText>{myFetchDataUri_1}</SpanText></PlaylistUri>
    <PlaylistDesc>Description:<DescriptionSpanText>{myFetchDataDesc_1}</DescriptionSpanText></PlaylistDesc><br></br>
        <PlaylistNameWrapper>
    <PlaylistName>Playlist Name:</PlaylistName> 
        <PlaylistNameSpan>{myFetchDataName_2}</PlaylistNameSpan>
        </PlaylistNameWrapper>
    <PlaylistUri><SpanText>{myFetchDataUri_2}</SpanText></PlaylistUri>
    <PlaylistDesc>Description:<DescriptionSpanText>{myFetchDataDesc_2}</DescriptionSpanText></PlaylistDesc>
        </>
    )
}

export default DisplayMusicData;