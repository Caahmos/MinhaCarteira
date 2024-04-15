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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

    const { type } = useParams();
    const title = type === 'entry-balance' ? { lineColor: '#F7931B', title: 'Entradas' } : { lineColor: '#E44C4E', title: 'Saídas' };

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type])

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
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

        const responseFilted = listData.filter((item) => {
            const itemData = new Date(item.date);
            let itemMes = String(itemData.getMonth() + 1);
            let itemAno = String(itemData.getFullYear());

            return itemMes === monthSelected && itemAno === yearSelected
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
        [listData, type, monthSelected, yearSelected, data.length]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} onChange={(e) => { setMonthSelected(e.target.value) }} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => { setYearSelected(e.target.value) }} defaultValue={yearSelected} />
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