import React from "react";
import { useState, useMemo } from 'react';

import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";
import WalletBox from "../../layouts/WalletBox";
import MessageBox from "../../layouts/MessageBox";

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";
import listOfMonths from '../../../utils/months';
import happySvg from '../../assets/happy.svg'
import sadSvg from '../../assets/sad.svg'

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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach((item) => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month == monthSelected && year == yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount!');
                };
            };
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach((item) => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month == monthSelected && year == yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount!');
                };
            };
        });

        return total;
    }, [monthSelected, yearSelected]);

    const currentlyWallet = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses, yearSelected, monthSelected]);

    const message = useMemo(() => {
        if(currentlyWallet < 0){
            return {
                title: 'Poxa, que pena!',
                description: 'Neste mês você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tente cortar alguns gastos desnecessários',
                icon: sadSvg
            }
        }
        else if( currentlyWallet == 0){
            return {
                title: 'Uffa!',
                description: 'Neste mês você gastou exatamente o que ganhou!',
                footerText: 'Tenha cuidado, no próximo mês tente poupar o seu dinheiro.',
                icon: happySvg
            }
        }
        else{
            return {
                title: 'Muito Bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim, considere investir o seu valor!',
                icon: happySvg
            }
        }
    }, [currentlyWallet])

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
                <WalletBox title="Saldo" color="#4E41F0" amount={currentlyWallet} footerLabel="Atualizado com base nas entradas e saídas" icon="dolar" />
                <WalletBox title="Entradas" color="#F7931B" amount={totalGains} footerLabel="Atualizado com base nas entradas e saídas" icon="arrowUp" />
                <WalletBox title="Saídas" color="#E44C4E" amount={totalExpenses} footerLabel="Atualizado com base nas entradas e saídas" icon="arrowDown" />

                <MessageBox title={message.title} description={message.description} footerText={message.footerText} icon={message.icon} />
            </Content>
        </Container>
    )
}

export default Dashboard