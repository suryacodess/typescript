// Inference - Where we are not defining the type of variables.
// TS automatically checks the type of the variables

let id = 9100;
let names = "Surya Prakash";
let userVisited = true;
let weight = 73.5;
let techStack = [
  "React.JS",
  "TypeScript",
  "Astro.Js",
  "TailwindCSS",
  "Javascript",
];
let userDetails = {
  id,
  names,
  weight,
  techStack,
  userVisited,
};
console.log("userDetails:", userDetails);
