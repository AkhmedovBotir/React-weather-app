import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "83f254ec0e87ff55874b4d8eb3c67809";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })

    return data;
}