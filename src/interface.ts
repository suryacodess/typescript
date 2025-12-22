// Inteface type in ts
// with Interface type we can define the structure of variables
// to define we user interface keyword

interface userDetails {
  id: number | string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: number | string;
  techStack: string[];
}

let users: userDetails[] = [
  {
    id: 0,
    firstName: "Surua",
    middleName: "Prakash",
    lastName: "Srigada",
    age: 25,
    techStack: ["Html", "Css", "Js"],
  },
  {
    id: 1,
    firstName: "Surua",
    middleName: "Prakash",
    lastName: "Srigada",
    age: 18,
    techStack: ["Html", "Css", "Js"],
  },
  {
    id: 2,
    firstName: "Surua",
    middleName: "Prakash",
    lastName: "Srigada",
    age: 16,
    techStack: ["Html", "Css", "Js"],
  },
  {
    id: "3434",
    firstName: "Surua",
    middleName: "Prakash",
    lastName: "Srigada",
    age: 19,
    techStack: ["Html", "Css", "Js"],
  },
];

function getUserAges(users: userDetails[]): number | string | userDetails[] {
  let ages = users.filter((item) => {
    return Number(item.age) > 20;
  });
  return ages;
}
const ages = getUserAges(users);
console.log(ages);
