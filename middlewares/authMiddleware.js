import { body, validationResult } from "express-validator";

let regristValidators = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name can't be empty")
    .isLength({ min: 2 }),
  body("email")
    .trim()
    .toLowerCase()
    .notEmpty()
    .withMessage("email can't be empty")
    .isEmail()
    .withMessage("Invalid Email Format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters at least")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .withMessage("must contain upper char,lower ,number,and special charactar"),
  body("password-confirm")
    .notEmpty()
    .withMessage("password confirm can't be empty")
    .custom((val, { req }) => {
      if (val !== req.body.password)
        throw new Error("password and confirm must be the same ");
      return true;
    }),
  body("dob")
    .notEmpty()
    .withMessage("dob can't be empty")
    .isDate()
    .withMessage("Invalid Date format"),
  body("class").notEmpty().withMessage("class can't be Empty"),
  body("code")
    .matches(/^[A-Z0-9]+$/)
    .withMessage("code must be in format : uppercase letters and numbers only"),
  body("maxStudents")
    .isNumeric()
    .withMessage("maxStudents must be positive number only")
    .custom((val) => {
      if (val <= 0) throw new Error("maxStudents must be positive number only");
      return true;
    }),
];


let loginValidators = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Bad Email Format"),
  body("password").trim().notEmpty().withMessage("Password is required"),
  (req, res, next) => {
    let result = validationResult(req);

    if (!result.isEmpty()) {
      result.formatWith((error) => {
        return AppError(error.msg, 403, error.fields);
      });
      let FirstError = result.array({ onlyFirstError: true })[0];
      console.log(FirstError);
      next(FirstError);
    }
    next();
  },
];