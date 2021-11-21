// Enum
enum Roles {
  User = 10,
  Admin,
  SuperAdmin,
}
enum Roles2 {
  User = "USER",
  Admin = "ADMIN",
  SuperAdmin = "SUPERADMIN",
}

console.log(Roles.User, Roles.Admin, Roles.SuperAdmin);
console.log(Roles2.User, Roles2.Admin, Roles2.SuperAdmin);

// Objects
const Roles3 = {
  User: 0,
  Admin: 1,
  SuperAdmin: 2,
};
console.log(Roles3.User, Roles3.Admin, Roles3.SuperAdmin);
