import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const API_KEY = 'G0rvJJ4QBq-dLciuu6qBOiqw-w02arep1VVcDirWMVo';

const unsplashApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
});

export const getPhotos = (page = 1) => {
  return unsplashApi.get('/photos', { params: { page, per_page: 20 } });
};

export const getPhotoById = (id) => {
  return unsplashApi.get(`/photos/${id}`);
};