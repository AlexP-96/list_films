import axios, {AxiosResponse} from "axios";
import {IReqMovie, reqGenresMovie, responseMovie, sortFiled, sortOrder} from '../types/types';

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

    removeData(key: string): void {
        delete this.data[key];
    }

    async sendRequest(): Promise<AxiosResponse> {
        try {
            return await axios.post(reqUrl, this.data);
        } catch (error) {
            throw new Error(`Error sending request: ${error}`);
        }
    }
}

export const getAllMovies = async (data: IReqMovie) => {
    return await axios.post(reqUrl, data)
        .then((res: AxiosResponse<responseMovie>) => {
            if (res.status === 200) {
                return console.log(res.data.data)
            }
        })
        .catch((err: Error) => console.log(err))
}


//______________________________________________________
// export const sortOrderMovies = (options: sortOrder) => getAllMovies(
//     {
//         sort_order: options,
//     })
// export const sortFieldMovies = (options: sortFiled) => getAllMovies(
//     {
//         sort_field: options
//     });
//
// export const countSizePage = (options: number) => getAllMovies(
//     {
//         page_size: options
//     })
//
// export const searchMovie = (options: string) => getAllMovies(
//     {
//         search: options
//     })
//
// export const getAdultMovies = (options: boolean) => getAllMovies(
//     {
//         adult: options
//     })
//
// export const getBudgetMovies = (min: number, max: number) => getAllMovies(
//     {
//         budget_min: min,
//         budget_max: max
//     })
//
// export const getGenresMovies = (genres: reqGenresMovie[]) => getAllMovies(
//     {
//         genres: [...genres]
//     })
//
// export const getOriginalLanguage = (language: string) => getAllMovies(
//     {
//         original_language: language
//     })
//
// export const getPopularityMovie = (min: number, max: number) => getAllMovies({
//     popularity_min: min,
//     popularity_max: max
// })
//
// export const getReleaseDateMovie = (min: string, max: string) => getAllMovies({
//     release_date_min: min,
//     release_date_max: max
// })
//
// export const getRevenueMovie = (min: number, max: number) => getAllMovies({
//     revenue_min: min,
//     revenue_max: max
// })
//
// export const getRuntimeMovie = (min: number, max: number) => getAllMovies({
//     runtime_min: min,
//     runtime_max: max
// })
//
// export const getStatusMovie = (status: string) => getAllMovies({
//     status
// })
//
// export const getSpokenLanguages = (arr_lang: string[]) => getAllMovies({
//     spoken_languages: [...arr_lang]
// })
//
// export const getVoteAverageMovie = (min: number, max: number) => getAllMovies({
//     vote_average_min: min,
//     vote_average_max: max
// })
//
// export const getVoteCountMin = (min: number, max: number) => getAllMovies({
//     vote_count_min: min,
//     vote_count_max: max
// })




