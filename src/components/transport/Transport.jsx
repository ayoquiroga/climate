import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './Transport.css'
import "leaflet/dist/leaflet.css";

const position = [-31.53492123277424, -68.52718348583097]

const Transport = () => {
  return (<div className='leaflet-container' id='map'>
            <MapContainer center={[-31.53492123277424, -68.52718348583097]} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-31.53492123277424, -68.52718348583097]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )
}

export  {Transport}