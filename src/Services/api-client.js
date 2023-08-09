import axios from 'axios';

export async function getSongs(termName){
    // const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${termName}&limit=25`;

    const url = `https://itunes.apple.com/search?term=${termName}`;

    const response = await axios.get(url);
    console.log(response);
    return response.data['results'];

}