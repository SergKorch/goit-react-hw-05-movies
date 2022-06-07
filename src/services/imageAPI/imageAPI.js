import axios from 'axios';

const imageAPITrending = () => {
  return axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=564a0ae757c391da2cffbbed742b8161');
};

export default imageAPITrending;
