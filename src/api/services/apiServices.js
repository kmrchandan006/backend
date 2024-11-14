const User = require("../../models/userSchema");
const Student = require("../../models/studentSchema");

exports.createUserServices = async (req, res) => {
    try {
        const { phone_number, email } = req.body;

        const check = await User.findOne({
            $or: [
                { email: email },
                { phone_number: phone_number }
            ]
        });

        if (check) {
            const message = email === check.email ? "Email already registered" : "Phone number already registered";
            return {
                status: true,
                message: message,
                data: {
                    user_id: check._id,
                    user_name: check.user_name,
                    phone_number: check.phone_number,
                    email: check.email
                }
            }
        }

        const userData = await User.create(req.body);


        return {
            status: true,
            message: "User registered successfully",
            data: {
                user_id: userData._id,
                user_name: userData.user_name,
                phone_number: userData.phone_number,
                email: userData.email
            }
        }

    } catch (error) {
        console.error('An error occurred register user services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.signInUserServices = async (req, res) => {
    try {
        const { email, password } = req.body;

        const check = await User.findOne({
            email: email,
            password: password
        });

        if (!check || check === null) {
            return {
                status: false,
                message: "Please sign-in with correct credentials",
                data: {}
            }
        }

        return {
            status: true,
            message: "User sign in successfully",
            data: {
                user_id: check._id,
                user_name: check.user_name,
                phone_number: check.phone_number,
                email: check.email
            }
        }

    } catch (error) {
        console.error('An error occurred sign-in user services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.userListServices = async (req, res) => {
    try {

        const result = await Student.find({}, { _id: 0, userId: '$_id', user_name: 1, email: 1, phone_number: 1 });

        return {
            status: true,
            message: result ? "All users listed" : " No users listed",
            data: result || result.length > 0 ? result : []
        }

    } catch (error) {
        console.error('An error occurred register user services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.editUserServices = async (req, res) => {
    try {
        const { phone_number, email } = req.body;

        const check = await Student.findOne({
            $or: [
                { email: email },
                { phone_number: phone_number }
            ]
        });

        if (check) {
            const message = email === check.email ? "Email already exists" : "Phone number already exists";
            return {
                status: false,
                message: message,
                data: {}
            }
        }

        const userData = await User.create(req.body);


        return {
            status: true,
            message: "User data edit successfully",
            data: {
                user_id: userData._id,
                user_name: userData.user_name,
                phone_number: userData.phone_number,
                email: userData.email
            }
        }

    } catch (error) {
        console.error('An error occurred edit user services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}


exports.addStudentServices = async (req, res) => {
    try {
        const { phone_number, email } = req.body;

        const check = await Student.findOne({
            $or: [
                { email: email },
                { phone_number: phone_number }
            ]
        });

        if (check) {
            const message = email === check.email ? "Email already exists" : "Phone number already exists";
            return {
                status: false,
                message: message,
                data: {}
            }
        }

        const userData = await Student.create(req.body);


        return {
            status: true,
            message: "Student added successfully",
            data: {
                user_id: userData._id,
                user_name: userData.user_name,
                phone_number: userData.phone_number,
                email: userData.email
            }
        }

    } catch (error) {
        console.error('An error occurred add student services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.editStudentServices = async (req, res) => {
    try {
        const { phone_number, email, user_name, userId } = req.body;

        const check = await Student.findOneAndUpdate({ _id: userId }, {
            phone_number: phone_number, email: email, user_name: user_name
        });

        if (!check) {
            return {
                status: false,
                message: "Data not found",
                data: {}
            }
        }

        return {
            status: true,
            message: "Student added successfully",
            data: check
        }

    } catch (error) {
        console.error('An error occurred add student services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.getStudentServices = async (req, res) => {
    try {

        const userId = req.query.userId;

        const check = await Student.findById(userId, { _id: 0, userId: '$_id', user_name: 1, email: 1, phone_number: 1 });

        return {
            status: true,
            message: check ? `Student data fetched successfully` : `Data not found`,
            data: check ? check : {}
        }

    } catch (error) {
        console.error('An error occurred add student services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}

exports.deleteStudentServices = async (req, res) => {
    try {

        const userId = req.query.userId;

        const check = await Student.findByIdAndDelete(userId);

        return {
            status: true,
            message: check ? `Data deleted successfully` : `Data not found`,
            data: check ? check : {}
        }

    } catch (error) {
        console.error('An error occurred add student services:', error);

        return {
            status: false,
            message: error.message,
            data: {}
        }

    }
}