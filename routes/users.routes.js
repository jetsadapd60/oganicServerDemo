const express = require("express");
const router = express.Router();
const users = require("../controllers/user-controllers");
const { checkDataSignUp, checkDataSignIn, checkDataUpdatePassword } = require("../middleware/userValidator");
const { checkLogin } = require("../middleware/passport");
const { isAdmin } = require("../middleware/isAdmin");
const { uploadImageProfile } = require("../middleware/multer");

/**
 * /registrer
 * /get all user
 */
router
  .route("/")
  .post([ checkDataSignUp, uploadImageProfile.single("imageFile") ], users.createUser)
  .get([ checkLogin, isAdmin ], users.loadAllUsers);

router.route("/:userId")
  .get([ checkLogin, isAdmin ], users.loadUser)
  .put([ checkDataUpdatePassword, checkLogin, isAdmin ], users.updatePassword);

router.post("/login",[ checkDataSignIn ], users.login);

module.exports = router;
