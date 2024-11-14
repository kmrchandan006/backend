const { createUserServices, signInUserServices, userListServices, addStudentServices, getStudentServices, editStudentServices, deleteStudentServices } = require("../services/apiServices");

exports.createUserController = async (req, res, next) => {
    try {
        console.log("Request parameters in register user API controller:--", req.body);
        const data = await createUserServices(req);
        res.send(data);
        console.log("Response parameters in register user API controller:--", data);
    } catch (error) {
        console.log("Error in register user API controller:--", error);
        next(error);
    }
};

exports.editUserController = async (req, res, next) => {
    try {
        console.log("Request parameters in edit user API controller:--", req.body);
        const data = await createUserServices(req);
        res.send(data);
        console.log("Response parameters in edit user API controller:--", data);
    } catch (error) {
        console.log("Error in edit user API controller:--", error);
        next(error);
    }
};

exports.signInUserController = async (req, res, next) => {
    try {
        console.log("Request parameters in Sign-in User API controller:--", req.body);
        const data = await signInUserServices(req);
        res.send(data);
        console.log("Response parameters in Sign-in User API controller:--", data);
    } catch (error) {
        console.log("Error in Sign-in User API controller:--", error);
        next(error);
    }
};

exports.userListController = async (req, res, next) => {
    try {
        console.log("Request parameters in User List API controller:--");
        const data = await userListServices(req);
        res.send(data);
        console.log("Response parameters in User List API controller:--", data);
    } catch (error) {
        console.log("Error in User List API controller:--", error);
        next(error);
    }
};

exports.addStudentController = async (req, res, next) => {
    try {
        console.log("Request parameters in add student API controller:--", req.body);
        const data = await addStudentServices(req);
        res.send(data);
        console.log("Response parameters in add student API controller:--", data);
    } catch (error) {
        console.log("Error in add student API controller:--", error);
        next(error);
    }
};

exports.editStudentController = async (req, res, next) => {
    try {
        console.log("Request parameters in edit student API controller:--", req.body);
        const data = await editStudentServices(req);
        res.send(data);
        console.log("Response parameters in edit student API controller:--", data);
    } catch (error) {
        console.log("Error in edit student API controller:--", error);
        next(error);
    }
};

exports.getStudentController = async (req, res, next) => {
    try {
        console.log("Request parameters in get student API controller:--");
        const data = await getStudentServices(req);
        res.send(data);
        console.log("Response parameters in get student API controller:--", data);
    } catch (error) {
        console.log("Error in get student API controller:--", error);
        next(error);
    }
};

exports.deleteStudentController = async (req, res, next) => {
    try {
        console.log("Request parameters in delete student API controller:--");
        const data = await deleteStudentServices(req);
        res.send(data);
        console.log("Response parameters in delete student API controller:--", data);
    } catch (error) {
        console.log("Error in delete student API controller:--", error);
        next(error);
    }
};