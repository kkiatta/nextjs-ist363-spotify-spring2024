"use client";

import { useEffect, useState } from "react";

import Showcase from '../components/custom/Showcase'

function HomePage() {
 const [artists, setArtist] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  try {
    fetch("/api/artists")
     .then((res) => res.json())
     .then((data) => { 
      setArtist(data.artists);
      setIsLoading(false);
     });
   } catch (error) {
    setError(error);
   }
 }, []);

 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>Error loading artists</p>;

 //console.log({artists});

 return (
 <main>
  <Showcase items={artists}/>
 </main>
 );
};

export default HomePage;
