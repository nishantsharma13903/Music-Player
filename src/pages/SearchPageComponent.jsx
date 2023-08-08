import React, { useEffect, useState } from 'react'
import SearchSong from '../Component/SearchSong'
import Songs from '../Component/Songs'
import { getSongs } from '../Services/api-client';

export default function SearchPageComponent() {

    const [allSongs,setSongs] = useState(JSON.parse(sessionStorage.getItem('homeSong'))?JSON.parse(sessionStorage.getItem('homeSong')):[]);

    const [firstTime, setFirstTime] = useState(JSON.parse(sessionStorage.getItem('homeSong'))? true : false);

    const loadSongs = async () => {
      setSongs(await getSongs("arijit"));
    }

    // Whenever I Call the component , It execute this function
    useEffect(()=>{
      if(!firstTime){
        loadSongs();
      }
    },[])

    const getArtistName = async (artist)=>{
        setSongs(await getSongs(artist));
    }

    useEffect(()=>{
      const string_song = JSON.stringify(allSongs);
      sessionStorage.setItem("homeSong", string_song);
    },[allSongs])

    const jsx = <>
          <SearchSong fun = {getArtistName}/>
          <Songs
          allsongs={allSongs} 
          />
        </>

  return (
    <div>
        {jsx}
    </div>
  )
}
