// @Welcome User /Guest
function welcomeUser(req, res) {
  res.render("welcome");
}
// @Register User
function registerUser(req, res) {
  res.render("register", { errors: [] });
}

// @Login User
function loginUser(req, res) {
  res.render("login");
}

// @userDashboard User
function userDashboard(req, res) {
  res.render("dashboard");
}

module.exports = { loginUser, registerUser, userDashboard };

// @Login User
function userDashboard(req, res) {
  res.render("dashboard");
}

module.exports = { welcomeUser, loginUser, registerUser, userDashboard };
