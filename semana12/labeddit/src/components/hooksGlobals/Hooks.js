import { useState } from "react"

export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onChange = (name, value) =>{
        const newForm = {...form, [name]: value};

        setForm(newForm)
    };

    const resetState = () =>{
        setForm(initialState)
    };

    return { form, onChange, resetState }
};

export const timePassed = (createdAt) => {

    const now = new Date().getTime()
    const milisseconds = now - createdAt
    const minutes = milisseconds * 1.6667E-5
    const hours = Math.floor(milisseconds/(1000 * 60 * 60))
    const days = Math.floor(hours/24)
    const months = Math.floor(days/30)

    if (minutes < 1) {
        return `less than one minute ago`
    } else if (hours < 1) {
        return `${Math.ceil(minutes)} minutes ago`
    } else if (hours === 1) {
        return `${hours} hour ago`
    } else if (hours < 24) {
        return `${hours} hours ago`
    } else if (days === 1) {
        return `${days} day ago`
    } else if (days < 30) {
        return `${days} days ago`
    } else if (months === 1) {
        return `${months} month ago`
    } else if (months > 1) {
        return `${months} months ago`
    }
};
