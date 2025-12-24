// Namespace in ts
// With Namespace you can group functions and classes which are related, increased code maintainability and readability

namespace Authentication {
  export class User {
    name: string = "surya prakash";
    username: string = "heysuryaaaa";
  }

  export function userLoggedIn(): void {
    const user = new User();
    console.log(`${user.username} logged in.`);
  }
}
Authentication.userLoggedIn();
