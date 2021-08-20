import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
    size: yup
        .string()
        .trim()
        .required('Size is required'),
    special: yup
        .string() 
        .trim(),
    
    pepperoni: yup.boolean(),
    gabagool: yup.boolean(),
    grilledChicken: yup.boolean(),
    canadianBacon: yup.boolean(),    
    bacon: yup.boolean(),
    onion: yup.boolean(),
    greenPepper: yup.boolean(),
    jalapenos: yup.boolean(),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    mushrooms: yup.boolean(),
})

export default formSchema