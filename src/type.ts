// Type in ts
// with type we can define types for a variable, function and objects we use type keyword.

type user = {
  id: string | number;
  name: string;
};

interface User {
  id: string | number;
  name: string;
}

const userDetails: user = { name: "Sura", id: 0 };
const userDetails2: User = { name: "Prakas", id: "1" };

// Difference b/w type and interface
// Both are used to define the shape of the objects, variables or functions
// for type we use type keyword
// for interface we use interface keyword

// for type we use = (is equal to) assings the structure
// for interface we dont

// for type we use intersection to extend other types or interfaces
// for interface we use extends keyword

type users = user & { username: string };
interface Users2 extends User {
  employeId: string | number;
}

const interfaceUser: Users2 = { id: "1", name: "SUrya", employeId: "2323" };
const typeUser: users = { id: 2, name: "PrakA", username: "heysuryaaaa" };
console.log(interfaceUser, typeUser);
