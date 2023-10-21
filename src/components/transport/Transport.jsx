import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet"
import './Transport.css'
import "leaflet/dist/leaflet.css";
import  data  from "./vehiclePositionsSimple.json"
import icono from './icono.png'
import  L from "leaflet";



const Transport = () => {

  const position = [-34.62226285961549, -58.53152534945992]

  const lineas = data.slice(0,50);

  const customIcon = L.icon({
    iconUrl: icono,
    iconSize: [30, 30],
    iconAnchor: [30, 30],
  });

  return (<div className='leaflet-container' id='map'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {lineas.map((lineas, index) => 
                <Marker 
                  key={index} 
                  position={[lineas.latitude , lineas.longitude]}
                  icon={customIcon} >
                <Popup>
                key={lineas.agency_id}
                </Popup>
              </Marker>
              
              )}
 
            </MapContainer>
          </div>
        )
}

export  {Transport}