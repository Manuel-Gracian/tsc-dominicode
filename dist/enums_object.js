"use strict";
// Enum
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 10] = "User";
    Roles[Roles["Admin"] = 11] = "Admin";
    Roles[Roles["SuperAdmin"] = 12] = "SuperAdmin";
})(Roles || (Roles = {}));
var Roles2;
(function (Roles2) {
    Roles2["User"] = "USER";
    Roles2["Admin"] = "ADMIN";
    Roles2["SuperAdmin"] = "SUPERADMIN";
})(Roles2 || (Roles2 = {}));
console.log(Roles.User, Roles.Admin, Roles.SuperAdmin);
console.log(Roles2.User, Roles2.Admin, Roles2.SuperAdmin);
// Objects
const Roles3 = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2,
};
console.log(Roles3.User, Roles3.Admin, Roles3.SuperAdmin);
