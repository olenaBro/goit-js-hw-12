import axios from 'axios';

const API_KEY = '54287285-776a87bf4c277c8bc3886317f';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,         
        page: page,
      },
    });

    return response.data;     
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error.message);
    throw error;
  }
}