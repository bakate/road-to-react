import axios from 'axios';

const pexels = axios.create({
  baseURL: 'https://api.pexels.com',
  headers: {
    Authorization: '563492ad6f91700001000001bdf91867dd024f20b417741f77ef6c09',
  },
});

export default pexels;
