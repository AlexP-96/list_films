import {classNames} from "6_shared/lib/helpers/classNames/classNames";
import cls from "./Movie.module.scss";
import {Text} from "6_shared/ui/Text/Text";
import React, {FC} from "react";
import {dataMovie, genresMovie} from "6_shared/api/types/types";

const changeTime = (runtime: number) => {
    const totalMinutes = runtime;  // 2 часа и 5 минут
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    return formattedTime;
}

interface MovieItemProps {
    className?: string;
    key?: number;
    obj?: dataMovie;
}

export const MovieItem: FC<MovieItemProps> = ({obj}) => {
    return (
        <div
            className={cls.wrapperMovieItem}
        >
            <div className={classNames(cls.headerMovie, {}, [''])}>
                <div className={cls.headerItemMovie}>
                    <div className={cls.image}>
                    </div>
                    <div className={cls.descriptionsMovie}>
                        <Text className={cls.title}>
                            {obj.title === null ? '-' : obj.title}
                        </Text>
                        <Text>
                            {obj.runtime === null ? '-' : changeTime(obj.runtime)}
                        </Text>
                        <Text className={cls.textMovie}>
                            Adult: {obj.adult ? 'yes' : 'no'}
                        </Text>
                        <Text>
                            {obj.genres === null ? '-' : obj.genres.map((item: genresMovie) => item.name).join(', ')}
                        </Text>
                        <Text>
                            vote average: {obj.vote_average === null ? '---' : obj.vote_average}/10
                        </Text>
                        <Text>
                            {obj.release_date === null ? '---' : obj.release_date}
                        </Text>
                        <Text>
                            Budget: {obj.budget === null ? '---' : obj.budget}$
                        </Text>
                    </div>
                    <div className={cls.rightDescription}>
                        <Text>
                            IMBD_ID: {obj.imdb_id === null ? '-' : obj.imdb_id}
                        </Text>
                        <Text>
                            {obj.original_language === null ? '---' : obj.original_language}
                        </Text>
                    </div>
                </div>
                <Text>
                    Belongs to collection: {obj.belongs_to_collection === null ? '-' : obj.belongs_to_collection.name}
                </Text>

            </div>
            <div className={classNames('', {}, [''])}>
                <Text>
                    {obj.overview === null ? '---' : obj.overview}
                </Text>
                <Text>
                    popularity: {obj.popularity === null ? '---' : obj.popularity}
                </Text>
            </div>
            <div className={classNames(cls.headerMovie, {}, [''])}>
                <Text>
                    production
                    companies: {obj.production_companies === null ? '-' : obj.production_companies.map((item: any) => item.name).join(', ')}
                </Text>
                <Text>
                    production
                    countries: {obj.production_countries === null ? '-' : obj.production_countries.map((item: any) => item.name).join(', ')}
                </Text>

                <Text>
                    revenue: {obj.revenue === null ? '-' : obj.revenue}
                </Text>
            </div>
            <div className={classNames(cls.headerMovie, {}, [''])}>
                <Text>
                    spoken
                    languages: {obj.spoken_languages === null ? '-' : obj.spoken_languages.map((obj) => obj.name).join(', ')}
                </Text>
                <Text>
                    status: {obj.status === null ? '-' : obj.status}
                </Text>
                <Text>
                    tagline: {obj.tagline === null ? '-' : obj.tagline}
                </Text>
                <Text>
                    {obj.original_title === null ? '-' : obj.original_title}
                </Text>
                <Text>
                    vote count: {obj.vote_count === null ? '---' : obj.vote_count}
                </Text>
                <Text>
                    site: {obj.homepage === null ? '-' : obj.homepage}
                </Text>
            </div>
        </div>)
}
