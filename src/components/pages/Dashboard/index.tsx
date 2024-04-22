import React from "react";
import { useState, useMemo } from 'react';

import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";
import WalletBox from "../../layouts/WalletBox";

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";
import listOfMonths from '../../../utils/months';

import {
    Container,
    Content
} from './styles'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: Array<number> = [];

        [...gains, ...expenses].forEach((item) => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map((year) => {
            return {
                value: year,
                label: year
            }
        })
    }, []);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });
    }, []);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Valor do mês inválido! É aceito entre 0 - 24.');
        };
    };

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw new Error('Valor do ano inválido! É aceito somente números inteiros.');
        };
    };

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months} onChange={(e) => { handleMonthSelected(e.target.value) }} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => { handleYearSelected(e.target.value) }} defaultValue={yearSelected} />
            </ContentHeader>
            <Content>
                <WalletBox title="Saldo" color="#4E41F0" amount={150.00} footerLabel="Atualizado com base nas entradas e saídas" icon="dolar" />
                <WalletBox title="Entradas" color="#F7931B" amount={5000.00} footerLabel="Atualizado com base nas entradas e saídas" icon="arrowUp" />
                <WalletBox title="Saídas" color="#E44C4E" amount={4850.00} footerLabel="Atualizado com base nas entradas e saídas" icon="arrowDown" />
            </Content>
        </Container>
    )
}

export default Dashboard