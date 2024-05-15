import bed from "./bed.png";
import bed1 from "./bed1.jpg";
import bed4 from "./bed4.jpg";
import bed10 from "./bed10.webp";
import chair3 from "./chair3.jpg";
import chair4 from "./chair4.jpg";
import chair5 from "./chair5.jpg";
import green from "./green.jpg";
import green1 from "./green1.jpg";
import living from "./living.jpeg";
import living1 from "./living1.jpeg";
import living2 from "./living2.jpg";
import living4 from "./living4.jpg";
import living5 from "./living5.jpg";
import slide2 from "./slide2.jpg";
import outt from "./outt.jpeg";
import sofa12 from "./sofa12.jpg";
import table4 from "./table4.jpg";
import tv from "./tv.jpg";
import outdoor11 from "./outdoor11.jpg";
import outdoor14 from "./outdoor14.jpg";
import outdoor15 from "./outdoor15.jpg";
import outdoor18 from "./outdoor18.jpg";
import outdoorBack from "./outdoorBack.jpg";
import outdoornew4 from "./outdoornew4.jpg";
import outdoornew6 from "./outdoornew6.jpg";
import outdoornew8 from "./outdoornew8.jpg";
import outdoorslide1 from "./outdoorslide1.webp";
import cabinet02 from "./cabinet02.jpg";
import cabinet04 from "./cabinet04.jpg";
import cabinet06 from "./cabinet06.jpg";
import cabinet12 from "./cabinet12.jpg";
import cabinet14 from "./cabinet14.jpg";
import dining06 from "./dining06.jpg";
import dining08 from "./dining08.jpg";
import dining10 from "./dining10.jpg";

let all_product = [
  {
    id: 1,
    name: "Striped Flutter bed",
    category: "Bedroom",
    image: bed,
    hoverImage: bed10,
    price: 5000.0,
    
  },
  {
    id: 2,
    name: "MALM bed",
    category: "Bedroom",
    image: bed1,
   hoverImage: bed10,
    price: 7000.0,
  },
  {
    id: 3,
    name: "IDANAS bed",
    category: "Bedroom",
    image: bed4,
    hoverImage: bed10,
    price: 6500.0,
  },
  {
    id: 4,
    name: " MANDAL bed",
    category: "Bedroom",
    image: bed10,
    hoverImage: bed10,
    price: 7500.0,
  },
  {
    id: 5,
    name: "  VEDBO office chair",
    category: "Bedroom",
    image: chair3,
    hoverImage: bed10,
    price: 2500.0,
  },
  {
    id: 6,
    name: " LINANAS Home chair",
    category: "Livingroom",
    image: chair4,
    hoverImage: bed10,
    price: 2000.0,
  },
  {
    id: 7,
    name: " LACK Home chair",
    category: "Livingroom",
    image: chair5,
    hoverImage: bed10,
    price: 2700.0,
  },
  {
    id: 8,
    name: " GRONLID Home sofa",
    category: "Livingroom",
    image: green,
    hoverImage: bed10,
    price: 32000.0,
  },
  {
    id: 9,
    name: " NISSEDAL Home sofa",
    category: "Livingroom",
    image: green1,
    hoverImage: bed10,
    price: 45000.0,
  },
  {
    id: 10,
    name: " VIHALS Home sofa",
    category: "Livingroom",
    image: living,
    price: 48000.0,
  },
  {
    id: 11,
    name: " SKRUVBY Home sofa",
    category: "Livingroom",
    image: living1,
    price: 42000.0,
  },
  {
    id: 12,
    name: " HAUGA Home sofa",
    category: "Livingroom",
    image: living2,
    price: 48000.0,
  },
  {
    id: 13,
    name: " BESTA Home sofa",
    category: "Livingroom",
    image: living4,
    price: 52000.0,
  },
  {
    id: 14,
    name: " VIHALS Home sofa",
    category: "Livingroom",
    image: living5,
    price: 55000.0,
  },
  {
    id: 15,
    name: " STOCHOLM Coffee table",
    category: "outdoors",
    image: outt,
    price: 5000.0,
  },
  {
    id: 16,
    name: " HOLMERUD bed",
    category: "households",
    image: slide2,
    price: 59500.0,
  },
  {
    id: 17,
    name: " KIVIK Home sofa",
    category: "households",
    image: sofa12,
    price: 47000.0,
  },
  {
    id: 18,
    name: " BRIMNES Dressing table",
    category: "households",
    image: table4,
    price: 8000.0,
  },
  {
    id: 19,
    name: " HEMNES Tv stand",
    category: "households",
    image: tv,
    price: 5700.0,
  },
  {
    id: 20,
    name: "outdoor chair",
    category: "outdoors",
    image: outdoor11,
    price: 6800.0,
  },
  {
    id: 21,
    name: "NAMMARO outdoor chair",
    category: "outdoors",
    image: outdoor14,
    price: 7900.0,
  },
  {
    id: 22,
    name: " SUNDUSO outdoor chair",
    category: "outdoors",
    image: outdoor15,
    price: 8000.0,
  },
  {
    id: 23,
    name: " ASHKOLMEN outdoor chair",
    category: "outdoors",
    image: outdoor18,
    price: 9000.0,
  },
  {
    id: 24,
    name: " TORPARO outdoor Essentials",
    category: "outdoors",
    image: outdoorBack,
    price: 1200.0,
  },
  {
    id: 25,
    name: " RESO outdoor Essentials",
    category: "outdoors",
    image: outdoornew4,
    price: 9500.0,
  },
  {
    id: 26,
    name: "NAMAROO outdoor Essentials",
    category: "outdoors",
    image: outdoornew6,
    price: 7800.0,
  },
  {
    id: 27,
    name: "JOLPEN outdoor Essentials",
    category: "outdoors",
    image: outdoornew8,
    price: 9200.0,
  },
  {
    id: 28,
    name: "JOSTEIN outdoor Essentials",
    category: "outdoors",
    image: outdoorslide1,
    price: 15000.0,
  },
  {
    id: 29,
    name: "NORDKEN kitchen Essentials",
    category: "households",
    image: cabinet02,
    price: 25000.0,
  },
  {
    id: 30,
    name: "INGOLF kitchen cabinet",
    category: "households",
    image: cabinet04,
    price: 19000.0,
  },
  {
    id: 31,
    name: " LONGE kitchen cabinet",
    category: "households",
    image: cabinet06,
    price: 27000.0,
  },
  {
    id: 32, 
    name: " THEWAY kitchen dining table",
    category: "households",
    image: dining06,
    price: 19000.0,
  },
  {
    id: 33,
    name: "MINITUE kitchen dining table",
    category: "households",
    image: dining08,
    price: 30000.0,
  },
  {
    id: 34,
    name: "LEGEND kitchen dining table",
    category: "households",
    image: dining10,
    price: 29000.0,
  },
  {
    id: 35,
    name: "EKEDALEN kitchen cabinet",
    category: "households",
    image: cabinet12,
    price: 35000.0,
  },
  {
    id: 36,
    name: "KIKI kitchen cabinet",
    category: "households",
    image: cabinet14,
    price: 37000.0,
  },
 
];

export default all_product;