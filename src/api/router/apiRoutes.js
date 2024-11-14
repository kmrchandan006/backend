const express = require("express");
const router = express.Router();

//schemaValidator
const validatorResponse = require("../../utility/joiValidator");

//schemas
const { createUserSchema, signInUserSchema, editUserSchema, createStudentSchema, addStudentSchema, editStudentSchema } = require("../validationSchema/apiValidationSchema");


//controller
const { createUserController, signInUserController, userListController, addStudentController, getStudentController, editStudentController, deleteStudentController } = require("../controllers/apiController");


//routes
router.post('/create-new-user', validatorResponse(createUserSchema), createUserController);

// router.post('/edit-user-details', validatorResponse(editUserSchema), editUserController);

router.post('/sign-in', validatorResponse(signInUserSchema), signInUserController);

router.get('/user-list', userListController);

router.post('/add-student-data', validatorResponse(addStudentSchema), addStudentController);

router.post('/edit-student-data', validatorResponse(editStudentSchema), editStudentController);

router.get('/get-student-data', getStudentController);

router.get('/delete-student-data', deleteStudentController);


module.exports = router;    