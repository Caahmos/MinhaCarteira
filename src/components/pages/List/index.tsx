import React, { useEffect, useMemo, useState } from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";
import { useParams } from 'react-router-dom';

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";

import {
    Container,
    Content,
    Filters
} from './styles'
import HistoryFinanceCard from "../../layouts/HistoryFinanceCard";

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

    const { type } = useParams();
    const title = type === 'entry-balance' ? { lineColor: '#F7931B', title: 'Entradas' } : { lineColor: '#E44C4E', title: 'Saídas' };

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type])

    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
    ]

    const years = [
        { value: 2020, label: 2024 },
        { value: 2019, label: 2023 },
        { value: 2018, label: 2022 },
    ]

    useEffect(() => {

        const response = listData.map((item) => {
            return {
                id: String(Math.random() * listData.length),
                description: item.description,
                amountFormated: item.amount,
                frequency: item.frequency,
                dateFormated: item.date,
                tagColor: item.frequency === 'eventual' ? '#E44C4E' : '#4E41F0' 
            }
        })

        setData(response);
        console.log(data);
    },
        [type]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual">
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