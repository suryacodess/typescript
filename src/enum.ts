// Enum in ts
// With Enum we can set some static values which can be used accross the site, no need to create again those static values
// for eg. messages, status, user roles

enum status {
  success = "Success",
  fail = "Failure",
  error = "Error",
}

enum userRoles {
  admin = "Admin",
  editor = "Editor",
}

enum msgs {
  loginSuccess = "User successfully logged in",
  emailMissing = "Please enter proper email",
  passwordMissing = "Please enter proper password",
}

console.log(status.success, userRoles.admin, msgs.loginSuccess);
