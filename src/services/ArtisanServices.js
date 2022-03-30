import axios from "axios"

const ARTISAN_BASE_REST_API_URL = "http://localhost:8080/api/artisans"

class ArtisanServices{
    createArtisan(artisan){
        // const fd = new FormData();
        // fd.append('photo', photo);
        // console.log(fd);
        console.log(artisan);
        return axios.post(ARTISAN_BASE_REST_API_URL, artisan );

    }
}
export default new ArtisanServices()