import reloj from '../assets/reloj.png';
import re from '../assets/re.jpeg';
import loj from '../assets/loj.jpg';

import producto2 from '../assets/producto2.jpg';
import pul from '../assets/pul.jpg';
import sera from '../assets/sera.jpg';

import collar from '../assets/collar.webp';
import co from '../assets/co.jpg';
import llar from '../assets/llar.jpg';

import mochila from '../assets/mochila.jpg';
import mo from '../assets/mo.jpg';
import chila from '../assets/chila.jpg';

import gorro from '../assets/gorro.jpg';
import go from '../assets/go.jpg';
import rro from '../assets/rro.jpg';

import lentes from '../assets/lentes.webp';
import len from '../assets/len.avif';
import tes from '../assets/tes.jpeg';

import billetera from '../assets/billetera.jpg';
import bille from '../assets/bille.jpg';
import tera from '../assets/tera.jpg';

import cadena from '../assets/cadena.jpg';
import cade from '../assets/cade.jpg';
import na from '../assets/nas.jpg';

import anillo from '../assets/anillo.jpg';
import ani from '../assets/anil.jpg';
import llo from '../assets/llo.jpg';

import aretes from '../assets/aretes.jpeg';
import are from '../assets/are.jpg';
import etes from '../assets/etes.jpg';

export const accesorios = [

  {
    id: 101,
    nombre:'Reloj Digital',
    precio:'S/ 180',
    imagen: reloj,
    imagenes:[reloj, re, loj],
    descripcion:'Reloj digital moderno con resistencia al agua.',
    marca:'Casio',
    garantia:'12 meses',
    stock:8
  },

  {
    id:102,
    nombre:'Pulsera',
    precio:'S/ 25',
    imagen: producto2,
    imagenes:[producto2, pul, sera],
    descripcion:'Pulsera negra elegante para uso diario.',
    marca:'Urban Style',
    garantia:'6 meses',
    stock:20
  },

  {
    id:103,
    nombre:'Collar Acero',
    precio:'S/ 40',
    imagen: collar,
    imagenes:[collar, co, llar],
    descripcion:'Collar de acero inoxidable resistente.',
    marca:'Steel',
    garantia:'6 meses',
    stock:15
  },

  {
    id:104,
    nombre:'Mochila Urbana',
    precio:'S/ 95',
    imagen: mochila,
    imagenes:[mochila, mo, chila],
    descripcion:'Mochila urbana para estudio y trabajo.',
    marca:'Adidas',
    garantia:'12 meses',
    stock:10
  },

  {
    id:105,
    nombre:'Gorra D',
    precio:'S/ 35',
    imagen: gorro,
    imagenes:[gorro, go, rro],
    descripcion:'Gorra The Walking Dead.',
    marca:'Nike',
    garantia:'6 meses',
    stock:18
  },

  {
    id:106,
    nombre:'Lentes de Sol',
    precio:'S/ 60',
    imagen: lentes,
    imagenes:[lentes, len, tes],
    descripcion:'Lentes de sol con protección UV.',
    marca:'Ray-Ban',
    garantia:'12 meses',
    stock:12
  },

  {
    id:107,
    nombre:'Billetera',
    precio:'S/ 45',
    imagen: billetera,
    imagenes:[billetera, bille, tera],
    descripcion:'Billetera de cuero sintético.',
    marca:'Urban Style',
    garantia:'6 meses',
    stock:25
  },

  {
    id:108,
    nombre:'Cadena Plateada',
    precio:'S/ 55',
    imagen: cadena,
    imagenes:[cadena, cade, na],
    descripcion:'Cadena plateada brillante.',
    marca:'Steel',
    garantia:'6 meses',
    stock:14
  },

  {
    id:109,
    nombre:'Anillo Acero',
    precio:'S/ 20',
    imagen: anillo,
    imagenes:[anillo, ani, llo],
    descripcion:'Anillo de acero inoxidable.',
    marca:'Steel',
    garantia:'6 meses',
    stock:30
  },

  {
    id:110,
    nombre:'Aretes',
    precio:'S/ 18',
    imagen: aretes,
    imagenes:[aretes, are, etes],
    descripcion:'Aretes modernos para cualquier ocasión.',
    marca:'Fashion',
    garantia:'6 meses',
    stock:22
  }

];