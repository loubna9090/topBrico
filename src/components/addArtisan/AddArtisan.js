import React from 'react'
import './addArtisan.css'
import { useState } from 'react'
import { services } from '../../data'
import { listeVille } from '../../data'
// import ArtisanServices from '../../services/ArtisanServices'

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
    let fd = new FormData()

    fd.append('photo', photo.files[0])
    fd.append('nomArtisan', artisan.nomArtisan)
    fd.append('prenomArtisan', artisan.prenomArtisan)
    fd.append('rsArtisan', artisan.rsArtisan)
    fd.append('mdpArtisan', artisan.mdpArtisan)
    fd.append('emailArtisan', artisan.emailArtisan)
    fd.append('adressArtisan', artisan.adressArtisan)
    fd.append('adressArtisan2', artisan.adressArtisan2)
    fd.append('telArtisan', artisan.telArtisan)
    fd.append('ville', artisan.ville)
    fd.append('serviceArt', artisan.serviceArt)
    fd.append('realisations', artisan.realisations)
    console.log(fd.getAll('serviceArt'))
    for (let first of fd.entries()) {
      console.log(first)
    }
    console.log(artisan)
    console.log(fd)
    fetch('http://localhost:8080/api/artisans/addartisan', {
      method: 'POST',
      body: fd,
    })
  }

  // const handlPhoto = (event) => {
  //   console.dir(event.target.files[0])
  //   let file = event.target.files[0]
  //   setPhoto(file)
  // }

  return (
    <div className="formArtisan">
      <form name="artisanForm">
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
            name="prenomArtisan"
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
            multiple
            onChange={(e) => setServiceArt([e.target.value])}
          >
            <option value="">Choisir les services</option>
            {services.map((serv) => (
              <option value={serv.nomService}>{serv.nomService}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Ville :</label>
          <input
            name="ville"
            id="ville"
            list="villes"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          ></input>

          <datalist id="villes">
            <option>Choisir la ville</option>
            {listeVille.map((laVille) => (
              <option value={laVille.ville}>{laVille.ville}</option>
            ))}
          </datalist>
        </div>

        <div>
          <label>Realisation</label>
          <input
            type="text"
            id="realisations"
            name="realisations"
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
            //  value={photo}
            onChange={(e) => setPhoto(e.target)}
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
