const Users = require("./User");
const Favorites = require("./Favorites");

User.hasMany(Favorites);
Favorites.belongsTo(User);

module.exports = { Users };
