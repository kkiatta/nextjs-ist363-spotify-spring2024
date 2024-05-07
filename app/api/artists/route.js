import { getAccessToken } from "../../../lib/spotify";

export async function GET () {
    const  token = await getAccessToken();

    //const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

    const artists = [
        {
         name: "D Gerrand",
         spotify_id: "1k7MP2tMC43vM0b0wg8HHg",
        },
        {
         name: "BodySlam",
         spotify_id: "76VTagPgPgPlFE7hfjT0Zt",
        },
        {
         name: "Saran",
         spotify_id: "3moR9d0X97NAtZRhHWOta5",
        },
        {
         name: "The Gentle Men",
         spotify_id: "3EYR1xDK06J61ois35DHbS",
        },
        {
         name: "Elton John",
         spotify_id: "3PhoLpVuITZKcymswpck5b",
        },
        {
         name: "Bruno Mars",
         spotify_id: "0du5cEVh5yTK9QJze8zA0C",
        },
        {
         name: "Kenshi Yonezu",
         spotify_id: "1snhtMLeb2DYoMOcVbb8iB",
        },
        {
         name: "Ado",
         spotify_id: "6mEQK9m2krja6X1cfsAjfl",
        },
        {
         name: "OFFICIAL HIGE DANDISM",
         spotify_id: "5Vo1hnCRmCM6M4thZCInCj",
        },
        {
         name: "Hikaru Utada",
         spotify_id: "7lbSsjYACZHn1MSDXPxNF2",
        },
       ];
       
     // Extract the artist IDs
     const artistsIds = artists.map((artist) => artist.spotify_id);
    
     // Convert the artist IDs to a string
     const artistsString = artistsIds.join(",");
 
    const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    }
    );

    const artistsData = await apiResponse.json();

    return new Response(JSON.stringify(artistsData));
}