import axios from 'axios';

// base url is routed to /api
const api = axios.create({
  baseURL: '/api'
});

export default api;
