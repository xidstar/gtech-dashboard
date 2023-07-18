import React, {useEffect} from 'react'
import { statesData } from '../data/dummy';
import {MapContainer, TileLayer, Polygon, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet';
import { Link } from 'react-router-dom';
import {HiOutlineArrowsExpand} from 'react-icons/hi'

const GeoMaps = () => {

  const center = [38.7851571,-76.7249689]
  const position1 = [38.9092573, -76.836643]
  const position2 = [38.9041741, -77.0369584]
  const position3 = [39.2877389, -76.6123732]
  const position4 = [51.5066479,-0.1433187]
  const position5 = [34.052235,-118.243683]
  
  return (
    
    <>
      

    <MapContainer
      center={center}
      zoom={10}
      style={{border:0, width: "100%", height: "100vh"}} 
    >
      <Link to="/user-profile" className='btn-expand absolute top-10 right-10 text-cyan-600 text-3xl'>
          <HiOutlineArrowsExpand />
      </Link>
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=9VSwUUuYtWf0fNEsgX5Q"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      
      <Marker position={position1} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          Location: Graham Technologies.
          <br />
          Date: 01/ 02/ 2023
          <br />
          Time: 13:48 EST
        </Popup>
      </Marker>
      <Marker position={position2} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          Location: Government Office.
          <br />
          Date: 10/12/2022
          <br />
          Time: 11:48 EST
        </Popup>
      </Marker>
      <Marker position={position3} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          Location: Cybersecurity Conference.
          <br />
          Date: 05/17/2023
          <br />
          Time: 9:15 EST
        </Popup>
      </Marker>
      <Marker position={position4} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          Location: The Ritz Carlton Hotel, London.
          <br />
          Date: 03/10/2023
          <br />
          Time: 23:00 EST
        </Popup>
      </Marker>
      <Marker position={position5} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          Location: Los Angeles, California.
          <br />
          Date: 07/05/2023
          <br />
          Time: 13:30 EST
        </Popup>
      </Marker>
      {
        statesData.features.map((state, index) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (
            <Polygon  key={index}
              pathOptions={{
                fillColor: '#fd8d3c',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: 'white',
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: "3",
                    color: "#666",
                    fillColor: "#d45962"
                  })
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#fd8d3c"
                  })
                },
                click: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "red"
                  })
                },
              }}
            />
          )
        })
      }
    </MapContainer>
    </>
  )
}



export default GeoMaps