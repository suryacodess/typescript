// Index signature in ts
// Index signature is used to define keys and its type in objects dynamically

interface UserDetails {
  id: number | string;
  username: string;
  readonly [key: string]: string | number | any[];
}

const userDetails: UserDetails = {
  id: 0,
  username: "heysuryaaaa",
  firstName: "Surya",
  secondName: "Prakash",
  lastName: "Srigada",
  mobileNumber: 9100682587,
  email: "suryaprakashsrigada@gmail.com",
};

console.log("user details:", userDetails);
