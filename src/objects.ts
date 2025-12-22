// Objects type in ts
// In Objects values, are stores as key value pair, we define object using :{} and interface

// empty object
let a: {} = {};
let obj: {
  id: number;
  firstName: string;
  lastName: string;
  techStack: string[];
} = {
  id: 0,
  firstName: "Surya",
  lastName: "Srigada",
  techStack: ["Html", "Css", "Js"],
};
console.log(obj.id);
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.techStack);

// Object defined with interface
interface userDetails {
  id: 0;
  firstName: string;
  middleName: string;
  lastName: string;
  techStack: any | string[];
}
function getUserDetails(obj: userDetails): void {
  const { id, firstName, middleName, lastName, techStack } = obj;
  console.log(id, firstName, middleName, lastName, techStack);
}
console.log(
  getUserDetails({
    id: 0,
    firstName: "Surya",
    middleName: "Prakash",
    lastName: "Srigada",
    techStack: ["Html", "Css", "Js"],
  })
);
