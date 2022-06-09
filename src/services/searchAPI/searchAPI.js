import axios from 'axios';
const searchAPI = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=564a0ae757c391da2cffbbed742b8161&query=${query}`
  );
};

export default searchAPI;
