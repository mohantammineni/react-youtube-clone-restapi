import Axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };

    export const FetchFromAPI = async(url) =>{
       const {data} = await Axios.get(`${BASE_URL}/${url}`, options);
       return data;
    }