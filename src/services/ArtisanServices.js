import axios from 'axios'

const ARTISAN_BASE_REST_API_URL = 'http://localhost:8080/api/artisans'

class ArtisanServices {
  createArtisan(artisan) {
    console.log(artisan)

    return axios.post(ARTISAN_BASE_REST_API_URL + '/addartisan', artisan, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
  listeville() {
    return axios.get(
      'https://raw.githubusercontent.com/high54/Communes-France-JSON/master/france.json',
    )
  }
}
export default new ArtisanServices()
