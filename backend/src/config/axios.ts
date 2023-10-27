import axios, { AxiosError, AxiosInstance } from "axios";

const { BASE_API } = process.env

export const axiosConf = async (contentType = "application/json"): Promise<AxiosInstance> => {
    const instance: AxiosInstance = axios.create({
        baseURL: `${BASE_API}`,
        headers: {
            "Content-Type": `${contentType}`
        }
    })

    instance.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );

    return instance
};

