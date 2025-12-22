// Functions types in ts
// all basic data types - number, string, array, object
// 1. void
// 2. never
// 3. any
// 4.

function abc(): void {
  console.log("returns nothing");
}
function abc2(): never {
  console.log("returns nothing at all");
  throw new Error("returns nothing at all");
}
function abc3(): any {
  console.log("can return any data type");
  return 2;
}
function abc4(): number {
  console.log("returns number");
  return 2;
}
function abc5(): string {
  console.log("returns string");
  return "str";
}
function abc6(): boolean {
  console.log("returns boolean");
  return true;
}
