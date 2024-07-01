import { SearchPanel } from '3_widgets/search_panel';
import { BlockInputsFilter } from '4_entities/RequestsFilter/ui/BlockInputsFilter';
import { BlockRadioFilter } from '4_entities/RequestsFilter/ui/BlockRadioFilter';
import { classNames } from '6_shared/lib/helpers/classNames/classNames';
import { Input } from '6_shared/ui/Input/Input';
import { Text } from '6_shared/ui/Text/Text';
import React, { FC } from 'react';
import { RequestKeyType } from '../../../4_entities/RequestsFilter';
import { BlockCheckboxFilter } from '../../../4_entities/RequestsFilter/ui/BlockCheckboxFilter';
import { reqGenresMovie } from '../../../6_shared/api/types/types';
import cls from './FilterPanel.module.scss';

interface FilterPanelProps {
    className?: string;
    children?: React.ReactNode;
}



export const FilterPanel: FC<FilterPanelProps> = ({ className }: FilterPanelProps) => {

    return (
        <div className={classNames(cls.searchPanel, {}, [className])}>
            <div className={cls.wrapperSearch}>
                <SearchPanel />
                <h2>Filters</h2>
                <BlockRadioFilter
                    titleFilter={'page size'}
                    params={RequestKeyType.page_size}
                    typeData={'number'}
                    arrValues={[
                        '10',
                        '20',
                        '30',
                        '40',
                        'all',
                    ]}
                />
                <BlockRadioFilter
                    titleFilter={'sort field'}
                    params={RequestKeyType.sort_field}
                    typeData={'string'}
                    arrValues={[
                        'imdb_id',
                        'budget',
                        'original_language',
                        'popularity',
                        'release_date',
                        'revenue',
                        'runtime',
                        'status',
                        'vote_average',
                        'vote_count',
                    ]}

                />
                <BlockRadioFilter
                    titleFilter={'sort order'}
                    params={RequestKeyType.sort_order}
                    typeData={'string'}
                    arrValues={[
                        'asc',
                        'desc',
                    ]
                    }

                />
                <BlockRadioFilter
                    titleFilter={'adult'}
                    arrValues={[
                        'true',
                        'false',
                    ]}
                    params={RequestKeyType.adult}
                    typeData={'boolean'}
                />
                <BlockInputsFilter
                    titleFilter={'budget'}
                    params={{
                        keyOne: RequestKeyType.budget_min,
                        keyTwo: RequestKeyType.budget_max,
                    }}
                />
                <BlockCheckboxFilter
                    titleFilter={'genres'}
                    arrValues={[
                        reqGenresMovie.ACTION,
                        reqGenresMovie.ADVENTURE,
                        reqGenresMovie.COMEDY,
                        reqGenresMovie.ANIMATION,
                        reqGenresMovie.CRIMINAL,
                        reqGenresMovie.DOCUMENTARY,
                        reqGenresMovie.DR_ADIEU,
                        reqGenresMovie.ROMANCE,
                        reqGenresMovie.HORROR,
                        reqGenresMovie.SCI_FI,
                        reqGenresMovie.MYSTERY,
                    ]}
                    params={RequestKeyType.genres}

                />

                <div className={cls.asideFilter}>
                    <Text>
                        original language
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'} />
                    </div>
                </div>

                <BlockInputsFilter
                    titleFilter={'popularity'}
                    params={{
                        keyOne: RequestKeyType.popularity_min,
                        keyTwo: RequestKeyType.popularity_max,
                    }}
                />
                <BlockInputsFilter
                    titleFilter={'release'}
                    params={{
                        keyOne: RequestKeyType.release_date_min,
                        keyTwo: RequestKeyType.release_date_max,
                    }}
                />
                <BlockInputsFilter
                    titleFilter={'revenue'}
                    params={{
                        keyOne: RequestKeyType.revenue_min,
                        keyTwo: RequestKeyType.revenue_max,
                    }}
                />
                <BlockInputsFilter
                    titleFilter={'runtime'}
                    params={{
                        keyOne: RequestKeyType.runtime_min,
                        keyTwo: RequestKeyType.runtime_max,
                    }}
                />
                <div className={cls.asideFilter}>
                    <Text>
                        spoken languages
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'} />
                    </div>
                </div>
                <div className={cls.asideFilter}>
                    <Text>
                        status
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'status'}</label>
                        <Input type={'checkbox'} />
                    </div>
                </div>
                <BlockInputsFilter
                    titleFilter={'vote average'}
                    params={{
                        keyOne: RequestKeyType.vote_average_min,
                        keyTwo: RequestKeyType.vote_average_max,
                    }}
                />
                <BlockInputsFilter
                    titleFilter={'vote count'}
                    params={{
                        keyOne: RequestKeyType.vote_count_min,
                        keyTwo: RequestKeyType.vote_count_max,
                    }}
                />
            </div>
        </div>
    );
};

