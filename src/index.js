import {getID, getClass,create} from './help';
import {Generateli} from './li';
import data from './../data'

const root = getID('root')
const ul = create('ul', {class: 'list'})
const list = data.map((item) => ul.append(Generateli(item)))
ul.append(list)
root.append(ul)
;