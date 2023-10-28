import { Request, Response } from 'express';
import { validHttpStatusCode } from '../utils/http';
import { axiosConf } from '../config/axios';
import { AxiosError, AxiosResponse } from 'axios';
import os from 'os'

export const getAllUsersPage = async (req: Request, res: Response) => {
    try {
        const axiosConfig = await axiosConf()
        const users = await axiosConfig.get(`users`).then((response: AxiosResponse) => {
            return response.data
        }).catch((error: AxiosError) => {
            throw error
        })
        return res.status(200).send({ hostname: os.hostname(), success: true, datasource: users ?? [] });

    } catch (error: any) {
        return res.status(validHttpStatusCode(error.statusCode)).send({ success: false, message: `Error: ${error.message}` });
    }
}

export const getAllAlbums = async (req: Request, res: Response) => {
    try {
        const axiosConfig = await axiosConf()
        const albums = await axiosConfig.get(`albums`).then((response: AxiosResponse) => {
            return response.data
        }).catch((error: AxiosError) => {
            throw error
        })
        return res.status(200).send({ hostname: os.hostname(), success: true, datasource: albums ?? [] });

    } catch (error: any) {
        return res.status(validHttpStatusCode(error.statusCode)).send({ success: false, message: `Error: ${error.message}` });
    }
}