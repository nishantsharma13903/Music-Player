let fav_arr = [];

export const updateFav = (songObj)=>{
    let bool = true;
    const songId = songObj.collectionId;
    fav_arr.forEach((items)=>{
        if(items.collectionId == songId){
            bool = false;
        }
    })

    if(bool){
        fav_arr.push(songObj);
        localStorage.setItem('del',JSON.stringify(fav_arr));
    }    
}

export const returnInfo = ()=>{
    return fav_arr;
}

export const delSong = (songId)=>{
    fav_arr = fav_arr.filter((item)=>{
        return (item.collectionId != songId);
    })
    localStorage.setItem('del',JSON.stringify(fav_arr));
    return (fav_arr);
}