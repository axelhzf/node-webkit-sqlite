var co = require("co");
var Sequelize = require("Sequelize");

var dbPath = __dirname + "/db.sqlite";

var sequelize = new Sequelize("", "", "", {
  dialect: "sqlite",
  storage: dbPath
});

var User = sequelize.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

co(function* () {
  yield sequelize.sync({force: true});

  yield User.create({username: "axel", password: "123"});
  yield User.create({username: "axel2", password: "123"});
  var users = yield User.findAll();

  console.log(users);

}).catch(function (e) {
  console.log(e.trace);
});


