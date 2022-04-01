import React from 'react'
import './addArtisan.css'
import { useState } from 'react'
import ArtisanServices from '../../services/ArtisanServices'

export default function AddArtisan() {
  const [nomArtisan, setNomArtisan] = useState('')
  const [prenomArtisan, setPrenomArtisan] = useState('')
  const [rsArtisan, setRsArtisan] = useState('')
  const [emailArtisan, setEmailArtisan] = useState('')
  const [mdpArtisan, setMdpArtisan] = useState('')
  const [adressArtisan, setAdressArtisan] = useState('')
  const [adressArtisan2, setAdressArtisan2] = useState('')
  const [telArtisan, setTelArtisan] = useState('')
  const [ville, setVille] = useState([])
  const [serviceArt, setServiceArt] = useState([])
  const [realisations, setRealisations] = useState([])
  const [photo, setPhoto] = useState('')
  const[listeVille, setListeVille]= useState([])
  

  const saveArtisan = (e) => {
    e.preventDefault()
    const artisan = {
      nomArtisan,
      prenomArtisan,
      rsArtisan,
      mdpArtisan,
      emailArtisan,
      adressArtisan,
      adressArtisan2,
      telArtisan,
      ville,
      serviceArt,
      realisations,
      photo,
    }

    ArtisanServices.createArtisan(artisan)
      .then((response) => {
        console.log(response.data)
        // history.push('/artisans')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  ArtisanServices.listeville()
    .then((response) => {
      console.log(response.data)
      setListeVille(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  
  // const handlPhoto = (event) => {
  //   console.dir(event.target.files[0])
  //   let file = event.target.files[0]
  //   setPhoto(file)
  // }
  

  return (
    <div className="formArtisan">
      <form method="post" name="artisanForm" encType="multipart/form-data">
        <div>
          <label>Nom :</label>
          <input
            type="text"
            id="nomArtisan"
            name="nomArtisan"
            value={nomArtisan}
            onChange={(e) => setNomArtisan(e.target.value)}
          />
        </div>
        <div>
          <label>Prénom :</label>
          <input
            type="text"
            id="prenomArtisan"
            name='prenomArtisan'
            value={prenomArtisan}
            onChange={(e) => setPrenomArtisan(e.target.value)}
          />
        </div>
        <div>
          <label>Raison Social :</label>
          <input
            type="text"
            id="rsArtisan"
            name="rsArtisan"
            value={rsArtisan}
            onChange={(e) => setRsArtisan(e.target.value)}
          />
        </div>
        <div>
          <label> E-mail :</label>
          <input
            type="email"
            id="emailArtisan"
            name="emailArtisan"
            value={emailArtisan}
            onChange={(e) => setEmailArtisan(e.target.value)}
          />
        </div>
        <div>
          <label> Mot de passe :</label>
          <input
            type="password"
            id="mdpArtisan"
            name="mdpArtisan"
            value={mdpArtisan}
            onChange={(e) => setMdpArtisan(e.target.value)}
          />
        </div>
        <div>
          <label>Adresse :</label>
          <input
            type="text"
            id="adressArtisan"
            name="adressArtisan"
            value={adressArtisan}
            onChange={(e) => setAdressArtisan(e.target.value)}
          />
        </div>
        <div>
          <label>Adresse 2 :</label>
          <input
            type="text"
            id="adressArtisan2"
            name="adressArtisan2"
            value={adressArtisan2}
            onChange={(e) => setAdressArtisan2(e.target.value)}
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="tel"
            id="telArtisan"
            name="telArtisan"
            value={telArtisan}
            onChange={(e) => setTelArtisan(e.target.value)}
          />
        </div>
        <div>
          <label>Services</label>
          <select
            name="serviceArt"
            id="serviceArt"
            value={serviceArt}
            onChange={(e) => setServiceArt([e.target.value])}
          >
            <option value="">Choisir les services</option>
            <option value="maçonnerie">maçonnerie</option>
            <option value="plomberie">plomberie</option>
            <option value="peinture">peinture</option>
            <option value="serrurie">serrurie</option>
            <option value="carrelage">carrelage</option>
          </select>
        </div>
        <div>
          <label>Ville :</label>
          <select
            name="ville"
            id="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          > 
          <option>Choisir la ville</option>
          {listeVille.map((laVille)=>(
            <option value={laVille.Nom_commune}>{laVille.Nom_commune}</option>
          ))}
          </select>
        </div>

        <div>
          <label>Realisation</label>
          <input
            type="text"
            id="realisations"
            name='realisations'
            value={realisations}
            onChange={(e) => setRealisations([e.target.value])}
          />
        </div>
        <div>
          <input
            hidden
            accept="image/*"
            type="file"
            id="file"
            name="photo"
            className="btn-file"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <label htmlFor="file" className="btn-2">
            Ajouter des photos
          </label>
        </div>
        <button
          className="btn btn-add"
          type="submit"
          onClick={(e) => saveArtisan(e)}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
