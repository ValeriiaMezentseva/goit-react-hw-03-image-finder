import axios from "axios";

export default async function fetchImages(query, currentPage) {
    axios.defaults.baseURL = 'https://pixabay.com/api/'

    return await axios.get('?key=30231372-e56830478ef5ec9094cee1a3e', {
        params: {
            q: query,
            per_page: 12,
            page: currentPage,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    })
        .then(response => {
            return response.data});
}; 

