import React from 'react'
import { Header } from '../components'
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const GeoMaps = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCy5PzpRFOkUnX3DDxOY9Pih4MpKJbNvz0",
  })

  if(!isLoaded) return <div>Loading...</div>

  return (
    // <GoogleMap  key={Math.random()} zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName='w-full h-full'>

    // </GoogleMap>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.6413495337406!2d-76.8393085234481!3d38.90931614599973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7bff7e1ecaf95%3A0x7254f178a0b35046!2sGraham%20Technologies!5e0!3m2!1sen!2sus!4v1682973951709!5m2!1sen!2sus" 
        width="600" 
        height="450" 
        style={{border:0, width: "100%", height: "100vh"}} 
        allowfullscreen="true" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>
    
  )
}



export default GeoMaps