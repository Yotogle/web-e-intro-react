
// Planeta.jsx
import React from 'react';
import { Planetas } from './planetas';
import miImagenMercurio from '../assets/01.jpg'; 
import miImagenVenus from '../assets/02.jpg';
import miImagenTierra from '../assets/03.jpg';
import miImagenMarte from '../assets/04.jpg';
import miImagenJupiter from '../assets/05.jpg';
import miImagenSaturno from '../assets/06.jpg';
import miImagenUrano from '../assets/07.jpg';
import miImagenNeptuno from '../assets/08.jpg';

export const planetas = [
  {
    id: '1',
    nombre: 'Mercurio',
    descripcion: 'El planeta más cercano al Sol, pequeño y rocoso.',
    distanciaMediaSol: '57.9 millones de km',
    temperaturaMedia: '167 °C',
    imagen: miImagenMercurio
  },
  {
    id: '2',
    nombre: 'Venus',
    descripcion: 'Conocido como el "gemelo de la Tierra" por su tamaño, pero con una atmósfera extremadamente densa y caliente.',
    distanciaMediaSol: '108.2 millones de km',
    temperaturaMedia: '462 °C',
    imagen: miImagenVenus
  },
  {
    id: '3',
    nombre: 'Tierra',
    descripcion: 'Nuestro hogar, el único planeta conocido con vida.',
    distanciaMediaSol: '149.6 millones de km',
    temperaturaMedia: '15 °C',
     imagen: miImagenTierra
  },
  {
    id: '4',
    nombre: 'Marte',
    descripcion: 'El "Planeta Rojo", objeto de mucha exploración por su potencial para albergar vida pasada o presente.',
    distanciaMediaSol: '227.9 millones de km',
    temperaturaMedia: '-63 °C',
    imagen: miImagenMarte
  },
  {
    id: '5',
    nombre: 'Júpiter',
    descripcion: 'El planeta más grande del sistema solar, un gigante gaseoso con una Gran Mancha Roja, una tormenta anticiclónica más grande que la Tierra.',
    distanciaMediaSol: '778.5 millones de km',
    temperaturaMedia: '-145 °C',
     imagen: miImagenJupiter
  },
  {
    id: '6',
    nombre: 'Saturno',
    descripcion: 'Famoso por sus impresionantes y complejos anillos, compuestos principalmente de partículas de hielo y roca.',
    distanciaMediaSol: '1.4 mil millones de km',
    temperaturaMedia: '-178 °C',
     imagen: miImagenSaturno
  },
  {
    id: '7',
    nombre: 'Urano',
    descripcion: 'Un gigante de hielo con una atmósfera de metano que le da un distintivo color azul-verdoso, y que gira de lado.',
    distanciaMediaSol: '2.9 mil millones de km',
    temperaturaMedia: '-216 °C',
     imagen: miImagenUrano
  },
  {
    id: '8',
    nombre: 'Neptuno',
    descripcion: 'El planeta más alejado del Sol, un gigante de hielo conocido por sus vientos extremadamente rápidos y su Gran Mancha Oscura.',
    distanciaMediaSol: '4.5 mil millones de km',
    temperaturaMedia: '-214 °C',
     imagen: miImagenNeptuno
  }
];

export const PlanetasVisitados = () => {
  return (
    <>
      <h1>Planetas visitados</h1>
      <ul>
        {
          planetas.map(planeta => (
            <Planetas
              key={planeta.id} 
              nombre={planeta.nombre}
              descripcion={planeta.descripcion}
              distanciaMediaSol={planeta.distanciaMediaSol}
              temperaturaMedia={planeta.temperaturaMedia}
              imagen={planeta.imagen}
            />
          ))
        }
      </ul>
    </>
  );
};