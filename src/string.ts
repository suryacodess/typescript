// string type in ts
// to define string data type to a variable we use :string

var a: string = "Surya Prakash";
var a: string = "Srigada";
console.log(a);

let username = "srigada";
username = "prakash";
console.log(username);
// username = 2; // error because of inference

function getUsername(username: string): string {
  return username;
}
let userUsername = getUsername(username);
console.log("username:", userUsername);

let b = new String("Surya");
console.log(b);
console.log(b.length);
console.log(b.charAt(0));
console.log(b.concat(username));
console.log(b.includes("Surya prakash"));
console.log(b.match(userUsername));
console.log(b.toLowerCase());
console.log(b.toUpperCase());
console.log(b.toLocaleLowerCase());
console.log(b.toLocaleUpperCase());
console.log(b.split(""));
console.log(b.split("").join(""));
console.log(b.substring(0, 1));
console.log(b.substring(username.length - 3, username.length - 2));
console.log(b.slice(0, 1));
console.log(b.slice(username.length - 3, username.length - 2));
console.log(b.trim().length);

// converting number/boolean to string
let number: number = 100;
console.log(typeof number);
let str: string = number.toString();
console.log(typeof str);

let bool: boolean = true;
console.log(typeof bool);
let str2: string = bool.toString();
console.log(typeof str2);
