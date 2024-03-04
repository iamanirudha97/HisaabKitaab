import userAxios from "../../service/authServices";

export const userlogin = async (credentials) => {
    try {
        const response = await userAxios.post('user/login', credentials);
        console.log(credentials, response)
    } catch (error) {
        throw error;
    }
};