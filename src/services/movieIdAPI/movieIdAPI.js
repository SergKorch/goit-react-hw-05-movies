import axios from 'axios';

const movieIdAPI = (Id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=564a0ae757c391da2cffbbed742b8161`);
};

export default movieIdAPI;
