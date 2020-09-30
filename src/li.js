import { create } from './help'

export function Generateli(data){
 const li = create('li' ,{class: 'list-item'});
 const h2 = create('h2');
 const span = create('span');

 h2.innerText = `Name: ${data.name}`; //data.name;
 span.innerText = `Price: ${data.price}`; //data.price;
 li.append(h2)
 li.append(span)
 return li;
    
}
