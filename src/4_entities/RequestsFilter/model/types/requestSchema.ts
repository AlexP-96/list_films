import { IReqMovie } from '6_shared/api/types/types';

export interface RequestSchema extends IReqMovie {
    data: IReqMovie;
}

export enum RequestKeyType {
    page = 'page',
    search = 'search',
    genres = 'genres',
    status = 'status',
    sort_order = 'sort_order',
    adult = 'adult',
    ids = 'ids',
    budget_max = 'budget_max',
    budget_min = 'budget_min',
    imdb_id = 'imdb_id',
    original_language = 'original_language',
    page_size = 'page_size',
    popularity_max = 'popularity_max',
    popularity_min = 'popularity_min',
    release_date_max = 'release_date_max',
    release_date_min = 'release_date_min',
    revenue_max = 'revenue_max',
    revenue_min = 'revenue_min',
    runtime_max = 'runtime_max',
    runtime_min = 'runtime_min',
    sort_field = 'sort_field',
    spoken_languages ='spoken_languages',
    vote_average_max = 'vote_average_max',
    vote_average_min = 'vote_average_min',
    vote_count_max = 'vote_count_max',
    vote_count_min = 'vote_count_min',
}