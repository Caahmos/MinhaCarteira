import React, { useEffect, useMemo, useState } from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";
import { useParams } from 'react-router-dom';

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";
import listOfMonths from '../../../utils/months';

import {
    Container,
    Content,
    Filters
} from './styles'
import HistoryFinanceCard from "../../layouts/HistoryFinanceCard";
import formatCurrency from "../../../utils/formatCurrency";
import formatDate from "../../../utils/formateDate";

interface IData {
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
}

const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

    const { type } = useParams();
    const title = type === 'entry-balance' ? { lineColor: '#F7931B', title: 'Entradas' } : { lineColor: '#E44C4E', title: 'Saídas' };

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type])

    const years = useMemo(() => {
        let uniqueYears: Array<number> = [];

        listData.forEach(( item ) => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(( year ) => {
            return {
                value: year,
                label: year
            }
        })
    }, [listData]);

    const months = useMemo(() => {
        return listOfMonths.map(( month, index ) => {
            return {
                value: index + 1,
                label: month
            }
        });
    }, []);

    const handleFrequencyClick = (frequency: string) => {
        const alreadSelected = selectedFrequency.findIndex(item => item === frequency);

        if(alreadSelected >= 0){
            const filtered = selectedFrequency.filter(( item ) => {
                return item !== frequency;
            });
            setSelectedFrequency(filtered);
        }else{
            setSelectedFrequency((prev) => [...prev, frequency]);
        }
    }

    useEffect(() => {

        const responseFilted = listData.filter((item) => {
            const itemData = new Date(item.date);
            let itemMes = String(itemData.getMonth() + 1);
            let itemAno = String(itemData.getFullYear());

            return itemMes === monthSelected && itemAno === yearSelected && selectedFrequency.includes(item.frequency)
        })

        const response = responseFilted.map((item) => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormated: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormated: formatDate(item.date),
                tagColor: item.frequency === 'eventual' ? '#E44C4E' : '#4E41F0'
            }
        })

        setData(response);
    },
        [listData, type, monthSelected, yearSelected, data.length, selectedFrequency]);


    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} onChange={(e) => { setMonthSelected(e.target.value) }} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => { setYearSelected(e.target.value) }} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent 
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={ () => { handleFrequencyClick('recorrente') }}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual 
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={ () => { handleFrequencyClick('eventual') }}
                    >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.length > 0 ? data.map((dadosCard) => (
                        <HistoryFinanceCard key={dadosCard.id} title={dadosCard.description} subtitle={dadosCard.dateFormated} amount={dadosCard.amountFormated} tagColor={dadosCard.tagColor} />
                    )) : <p>Sem Histórico</p>
                }
            </Content>
        </Container>
    )
}

export default List