import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: '100'
    },
    headers: {
        'X-RapidAPI-Key': '2c335bfea1msh322e0e108343d96p15fdb2jsna906be32bf23',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};