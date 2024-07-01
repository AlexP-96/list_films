export interface genresMovie {
    id: number;
    name: string;
}

export interface productionCompanies {
    id: number;
    name: string;
}

export interface productionCountries {
    iso_3166_1: string;
    name: string;
}

export interface spokenLanguages {
    iso_639_1: string;
    name: string;
}

export interface dataMovie {
    id: number | null;
    adult: boolean | null;
    belongs_to_collection: null | productionCompanies;
    budget: number | null;
    genres: genresMovie[] | null;
    homepage: number | null;
    imdb_id: number | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: number | null;
    production_companies: productionCompanies[] | null;
    production_countries: productionCountries[] | null;
    release_date: string | null;
    revenue: string | null;
    runtime: number | null;
    spoken_languages: spokenLanguages[] | null;
    status: string | null;
    tagline: string | null;
    title: string | null;
    vote_average: number | null;
    vote_count: number | null;
}

export interface responseMovie {
    ok: boolean;
    data_size: number;
    error: string;
    data: dataMovie[];
}

export type sortFiled =
    'imdb_id'
    | 'budget'
    | 'original_language'
    | 'popularity'
    | 'release_date'
    | 'revenue'
    | 'runtime'
    | 'status'
    | 'vote_average'
    | 'vote_count';

export type sortOrder =
    'desc'
    | 'asc';

export interface IReqMovie {
    page?: number;
    page_size?: number;
    sort_field?: sortFiled;
    sort_order?: sortOrder;
    imdb_id?: number;
    ids?: number[];
    search?: string;
    adult?: boolean;
    budget_min?: number;
    budget_max?: number;
    genres?: string[];
    original_language?: string;
    popularity_min?: number;
    popularity_max?: number;
    release_date_min?: string;
    release_date_max?: string;
    revenue_min?: number;
    revenue_max?: number;
    runtime_min?: number;
    runtime_max?: number;
    spoken_languages?: string[],
    status?: string;
    vote_average_min?: number;
    vote_average_max?: number;
    vote_count_min?: number;
    vote_count_max?: number;
}

export interface optionsReqMovie {
    data: IReqMovie;
    config?: any;
}

export enum reqGenresMovie {
    ACTION = 'Action',
    ADVENTURE = 'Adventure',
    ANIMATION = 'Animation',
    COMEDY = 'Comedy',
    CRIMINAL = 'Crime',
    DOCUMENTARY = 'Documentary',
    DR_ADIEU = 'Drama',
    FANTASY = 'Fantasy',
    FILM_NOIR = 'Film-Noir',
    HORROR = 'Horror',
    MUSICAL = 'Musical',
    MYSTERY = 'Mystery',
    ROMANCE = 'Romance',
    SCI_FI = 'Sci-Fi',
}

