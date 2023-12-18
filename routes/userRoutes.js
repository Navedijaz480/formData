const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route for creating a new employee
router.post("/add_user", userController.createUser);
// Route for retrieving all employees
router.get("/get_users", userController.getAllUsers);

// Route for retrieving a specific employee by ID
router.get("/:id", userController.getUserById);

// Route for updating a specific employee by ID
router.put("/:id", userController.updateUser);

// Route for deleting a specific employee by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;