import Laptop from '../assets/Laptop.jpg';
import Laptop2 from '../assets/Laptop2.jpg';
import Laptop3 from '../assets/Laptop3.png';

import producto1 from '../assets/producto1.jpeg';
import mi from '../assets/mi.jpg';
import das from '../assets/das.jpg';

import lavadora from '../assets/lavadora.jfif';
import la from '../assets/la.webp';
import va from '../assets/va.webp';

import refri from '../assets/refri.jpeg';
import re from '../assets/re.jpg';

import tele from '../assets/tele.jpg';
import te from '../assets/te.jpg';
import le from '../assets/le.jpg';

import aspi from '../assets/aspi.jpg'
import as from '../assets/as.jpg'
import pi from '../assets/pi.jpg'

import licua from '../assets/licua.jpg'
import li from '../assets/li.jpg'
import cua from '../assets/cua.jpg'

import cafe from '../assets/cafe.jpg'
import ca from '../assets/ca.webp'
import fe from '../assets/fe.jpg'

import freidora from '../assets/freidora.jpg'
import frei from '../assets/frei.jpg'
import dora from '../assets/dora.jpg'

import cocina from '../assets/cocina.jpg'
import coci from '../assets/coci.jpg'
import na from '../assets/na.jpg'



export const electrodomesticos = [
  {
    id: 1,
    nombre: 'Laptop Gamer',
    precio: 'S/ 3500',
    imagen: Laptop,
    imagenes: [
        Laptop,
        Laptop2,
        Laptop3
    ],
    descripcion: 'Laptop gamer de alto rendimiento.',
    marca: 'ASUS',
    garantia: '12 meses',
    stock: 5
  },
  {
    id: 2,
    nombre: 'Microondas',
    precio: 'S/ 450',
    imagen: producto1,
     imagenes: [
        producto1,
        mi,
        das
    ],
    descripcion: 'Microondas ideal para el hogar.',
    marca: 'LG',
    garantia: '12 meses',
    stock: 10
  },
  {
    id: 3,
    nombre: 'Lavadora',
    precio: 'S/ 1600',
    imagen: lavadora,
     imagenes: [
        lavadora,
        la,
        va
        
    ],
    descripcion: 'Lavadora automática.',
    marca: 'Samsung',
    garantia: '12 meses',
    stock: 7
  },
  {
    id: 4,
    nombre: 'Refrigeradora',
    precio: 'S/ 2200',
    imagen: refri,
     imagenes: [
        refri,
        re,
        re
        
    ],
    descripcion: 'Refrigeradora de gran capacidad.',
    marca: 'Mabe',
    garantia: '24 meses',
    stock: 4
  },
  {
    id: 5,
    nombre: 'Televisor Smart',
    precio: 'S/ 1800',
    imagen: tele,
     imagenes: [
        tele,
        te,
        le
    ],
    descripcion: 'Smart TV 4K Ultra HD.',
    marca: 'LG',
    garantia: '12 meses',
    stock: 8
  },
  {
    id: 6,
    nombre: 'Aspiradora',
    precio: 'S/ 380',
    imagen: aspi,
     imagenes: [
        aspi,
        as,
        pi
    ],
    descripcion: 'Aspiradora potente y silenciosa.',
    marca: 'Electrolux',
    garantia: '12 meses',
    stock: 15
  },
  {
    id: 7,
    nombre: 'Licuadora',
    precio: 'S/ 220',
    imagen: licua,
     imagenes: [
        licua,
        li,
        cua
    ],
    descripcion: 'Licuadora de 5 velocidades.',
    marca: 'Oster',
    garantia: '12 meses',
    stock: 12
  },
  {
    id: 8,
    nombre: 'Cafetera',
    precio: 'S/ 280',
    imagen: cafe,
     imagenes: [
        cafe,
        ca,
        fe
    ],
    descripcion: 'Cafetera programable.',
    marca: 'Black+Decker',
    garantia: '12 meses',
    stock: 9
  },
  {
    id: 9,
    nombre: 'Freidora de Aire',
    precio: 'S/ 520',
    imagen: freidora,
     imagenes: [
        freidora,
        frei,
        dora
    ],
    descripcion: 'Freidora sin aceite de 5L.',
    marca: 'Philips',
    garantia: '12 meses',
    stock: 6
  },
  {
    id: 10,
    nombre: 'Cocina Eléctrica',
    precio: 'S/ 950',
    imagen: cocina,
     imagenes: [
        cocina,
        coci,
        na
    ],
    descripcion: 'Cocina eléctrica de 4 hornillas.',
    marca: 'Indurama',
    garantia: '24 meses',
    stock: 3
  }
];