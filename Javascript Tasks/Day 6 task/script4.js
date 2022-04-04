

/* Fix the below to alert hello Guvi geek


let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

*/

let fname=10.5; 
fname = "Guvi";
lname = "geek";
let name = fname+ ' ' +lname;

//alert( 'hello ${name}' ); String placeholder can be used with template strings only.

alert( `hello ${name}` );