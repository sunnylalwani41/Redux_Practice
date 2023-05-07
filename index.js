import {compose, pipe} from "lodash/fp";
import {Map} from 'immutable';
import {produce} from 'immer';

let sayHello=()=>{
    return function(){
        return "Hello World";
    }
}
let fn = sayHello;

function greet(fnMessage){
    console.log(fnMessage());
}

let input= "    JavaScript\t";
let trimString= str => str.trim();
let wrap= type=> str=> `<${type}>${str}</${type}>`;
let lowerCase= str=> str.toLowerCase();

// function add(a){
//     return function(b){
//         return a+b;
//     }
// }
let add=a=>b=>{
 return a+b;   
}
let a =add(1);
let b= a(2);


let result= wrapInDiv(lowerCase(trimString(input)));

const transform= compose(wrap("div"), lowerCase, trim);
transform(input);

const transform2= pipe(trim, lowerCase, wrap("span"));
transform2(input);

const person = {name: "John",
                    address:{
                        city: "San Franceco",
                        country: "USA"
                    }
                };
const update= Object.assign({}, person, {name: "Bob"});
console.log(update);

const update2= Object.assign({}, person, {name:"Smith", age: 30});

const update3= {...person, name: "Bob"};
update3.address.city="New York";
const update4= {
    ...person, address{
        ...person.address, city="California"
    },
    name="Bob2"
}
console.log(update4);
//become immutable object of book
//3 package:-
//1- immutable
let book = Map({title: "Harry Potter"});

let published=(book)=> book.set("isPublished", true);

let book2= published(book);
console.log(book2);
console.log(book);

//want perticular value by key
console.log(book.get("title"));

//this immutable connect to ValinaJS
console.log(book.toJS());


//2- immer

let newBook= {title: "Harry Potter"};

let publish=(book)=> produce(book, draftBook=>{
    draftBook.isPublished= true;
});

let upd= publish(newBook);

console.log(upd);
console.log(newBook);

// ----------------------------------------------------

// const store = {
//     categories: [],
//     products: [],
//     cart: [],
//     user: []
// };


//event(Action) ----> store ----> event handler(reducer);
//              |
//              |
//              \/
//event(Action) <---- store <---- event handler(reducer);


//4 step
// design store
// define action
// create reducer
// set up the store


//create reducer

//go to src-> reducer.js


//create store

// go to src-> store.js

//action
// go to src-> index.js