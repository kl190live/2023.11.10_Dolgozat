import './style.css'
import { Artwork } from './artworkInterface';
import { Statue } from './statueClass';

let szobrok: Artwork[]=[];

const name=document.getElementById('Nev') as HTMLInputElement;
const date=document.getElementById('ev') as HTMLInputElement;
const price=document.getElementById('ertek') as HTMLInputElement;
const height=document.getElementById('magassag') as HTMLInputElement;
const felvesz=document.getElementById('felvesz');

felvesz!.addEventListener('click',()=>{
  if(name==null){
    throw new Error('Adja meg a mű nevét!');
  }
  else if(date==null||parseInt(date.value)>2023){
    throw new Error('Adja meg a mű dátumát!');
  }
  else if(price==null||parseInt(price.value)<5){
    throw new Error('Adja meg a mű árát!');
  }
  else if(height==null||parseInt(height.value)<15){
    throw new Error('Adja meg a mű magasságát!');
  }
  const obj=new Statue(name.value,parseInt(date.value),parseInt(price.value),parseInt(height.value))
  szobrok.push(obj);

})



