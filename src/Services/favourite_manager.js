let fav_arr;
if(JSON.parse(localStorage.getItem('del'))){
    fav_arr = [...JSON.parse(localStorage.getItem('del'))]
}else{
    fav_arr = [];
}

export const updateFav = (songObj)=>{
    let bool = true;
    const songId = songObj.trackId;
    fav_arr.forEach((items)=>{
        if(items.trackId == songId){
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
        return (item.trackId != songId);
    })
    localStorage.setItem('del',JSON.stringify(fav_arr));
    return (fav_arr);
}