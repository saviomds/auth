const User = require("../model/User");

function isValidEmail(email) {
  // Regular expression for validating an email address
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function registeringUser(req, res) {
  const { username, email, password } = req.body;
  let errors = [];

  // Check if username, email, and password are present
  if (!username || !email || !password) {
    errors.push({ msg: "Fill all Fields" });
  }

  // Validate email format
  if (email && !isValidEmail(email)) {
    errors.push({ msg: "Invalid email address" });
  }

  // Validate password length
  if (password && password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters long" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      username,
      email,
      password,
    });
    console.log(errors);
  } else {
    // Check if the email is already registered
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          // User with the same email already exists
          errors.push({ msg: "Email Already Registered" });
          console.log(errors);
          res.render("register", {
            errors,
            username,
            email,
            password,
          });
        } else {
          // Create a new user if the email is not registered
          const newUser = new User({
            username,
            email,
            password,
            date: new Date(), // Set the date field
          });
          console.log(newUser);

          // Save the new user to the database
          newUser
            .save()
            .then(() => {
              res.send("User registered successfully");
            })
            .catch((err) => {
              console.error(err);
              res.send("Error registering user");
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.send("Error checking user existence");
      });
  }
}

module.exports = {
  registeringUser,
};
