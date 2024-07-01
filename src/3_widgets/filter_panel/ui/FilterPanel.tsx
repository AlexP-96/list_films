import React, {FC, useEffect} from 'react';
import {classNames} from '6_shared/lib/helpers/classNames/classNames';
import {Text} from "6_shared/ui/Text/Text";
import cls from './FilterPanel.module.scss';
import {Input} from "6_shared/ui/Input/Input";
import {BlockInputsFilter} from "4_entities/BlockRadioFilter/ui/BlockInputsFilter";
import {SearchPanel} from "3_widgets/search_panel";
import {BlockRadioFilter} from "4_entities/BlockRadioFilter/ui/BlockRadioFilter";
import {requestDataActions} from "4_entities/BlockRadioFilter";
import {useDispatch, useSelector} from "react-redux";
import {
    requestDataMovieSelector
} from "4_entities/BlockRadioFilter/model/selectors/getBlockFilterValue/requestDataMovie";

interface FilterPanelProps {
    className?: string;
    children?: React.ReactNode;
}

export const FilterPanel: FC<FilterPanelProps> = ({className}: FilterPanelProps) => {

    return (
        <div className={classNames(cls.searchPanel, {}, [className])}>
            <div className={cls.wrapperSearch}>
                <SearchPanel/>
                <h2>Filters</h2>
                <BlockRadioFilter
                    titleFilter={'page size'}
                    params={'page_size'}
                    typeData={'number'}
                    arrValues={['10', '20', '30', '40', 'all']}
                />
                <BlockRadioFilter
                    titleFilter={'sort field'}
                    params={'sort_field'}
                    typeData={'string'}
                    arrValues={['imdb_id', 'budget', 'original_language', 'popularity', 'release_date', 'revenue', 'runtime', 'status', 'vote_average', 'vote_count',]}

                />
                <BlockRadioFilter
                    titleFilter={'sort order'}
                    params={'sort_order'}
                    typeData={'string'}
                    arrValues={['asc', 'desc']
                    }

                />
                <BlockRadioFilter
                    titleFilter={'adult'}
                    arrValues={['true', 'false']}
                    params={'adult'}
                    typeData={'boolean'}
                />
                <BlockInputsFilter
                    titleFilter={'budget'}
                />
                <BlockRadioFilter
                    titleFilter={'genres'}
                    arrValues={['true', 'false']}

                />

                <div className={cls.asideFilter}>
                    <Text>
                        original language
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>

                <BlockInputsFilter titleFilter={'popularity'}/>
                <BlockInputsFilter titleFilter={'release'}/>
                <BlockInputsFilter titleFilter={'revenue'}/>
                <BlockInputsFilter titleFilter={'runtime'}/>
                <div className={cls.asideFilter}>
                    <Text>
                        spoken languages
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'en'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>
                <div className={cls.asideFilter}>
                    <Text>
                        status
                    </Text>
                    <div className={cls.asideButtons}>
                        <label className={cls.checkbox}>{'status'}</label>
                        <Input type={'checkbox'}/>
                    </div>
                </div>
                <BlockInputsFilter titleFilter={'vote average'}/>
                <BlockInputsFilter titleFilter={'vote count'}/>
            </div>
        </div>
    );
};

