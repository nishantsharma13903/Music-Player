import axios from 'axios';

export async function getSongs(termName){
    console.log("working");
    const url = `https://itunes.apple.com/search?term=${termName}&limit=25`;

    const response = await axios.get(url);
    return response.data['results'];
}