import axios, {AxiosResponse} from "axios";
import {IReqMovie, responseMovie, sortFiled, sortOrder} from '../types/types';

export const reqUrl = 'http://185.185.69.80:8082/list';

interface RequestData {
    [key: string]: any;
}

export class RequestManager {
    private data: RequestData;

    constructor(initialData: RequestData = {}) {
        this.data = { ...initialData };
    }

    addData(data: IReqMovie): void {
        this.data = data;
    }

    async sendRequest(): Promise<AxiosResponse> {
        try {
            return await axios.post(reqUrl, this.data);
        } catch (error) {
            throw new Error(`Error sending request: ${error}`);
        }
    }
}


