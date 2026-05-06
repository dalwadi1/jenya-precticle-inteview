
import * as yup from 'yup'

export const authSchema = yup.object({
    username: yup
        .string()
        .required(),

    password: yup
        .string()
        .required()
        .min(6)
})