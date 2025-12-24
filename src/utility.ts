// Utility types in ts
// Utility types are built in types help us to manipulate and perform operations on the types
// ? type - optional property
// Partial type - optional property
// Required type - all properties are mandatory
// Readonly type - once assinged values, cant assign again
// Omit type - optional by declaring the key
// Exclude type - works on union types not on objects
type status = "success" | "pending" | "failure";
interface UserDetails {
  id: number;
  username: string;
  firstName: string;
  middleName?: string; // optional
  lastName: string;
  mobile: number;
  email: string;
}
const userDetails: UserDetails = {
  id: 1,
  username: "heysuryaaaa",
  firstName: "Surya",
  lastName: "Srigada",
  mobile: 9100682587,
  email: "suryaprakashsrigada@gmail.com",
};

// Partial type optional propeties
const userDetails2: Partial<UserDetails> = {
  id: 1,
  username: "heysuryaaaa",
  firstName: "Surya",
  lastName: "Srigada",
  mobile: 9100682587,
};

// Required type all properties are required now
const userDetails3: Required<UserDetails> = {
  id: 0,
  username: "heysurya",
  firstName: "surya",
  middleName: "prakash",
  lastName: "srigada",
  email: "surya@gmail.com",
  mobile: 910,
};
userDetails3.firstName = "prakash";

// Readonly type properties cant reassign values
const userDetails4: Readonly<UserDetails> = {
  id: 0,
  username: "heysurya",
  firstName: "surya",
  middleName: "prakash",
  lastName: "srigada",
  email: "surya@gmail.com",
  mobile: 910,
};
// userDetails4.firstName = "prakash"; // not possible

// Omit type
const userDetails5: Omit<UserDetails, "mobile"> = {
  id: 1,
  username: "2",
  firstName: "prakash",
  middleName: "siru",
  lastName: "srigada",
  email: "sr@gmail.com",
};

// Exclude type - only works with type union
const ud: Exclude<status, "fail"> = "success";
const ud2: Exclude<status, "fail" | "pending"> = "success";
console.log(ud, ud2);
