const { z } = require("zod");

const loginSchema = z.object({
 

    email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "email must be atleast of 3 chars" })
    .max(255, { message: "email must not be more than 255 characters" }),

    

    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be atleast of 3 chars" })
    .max(20, { message: "password must not be more than 255 characters" }),


});


module.exports=loginSchema