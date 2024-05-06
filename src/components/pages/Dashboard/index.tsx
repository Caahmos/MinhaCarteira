import React from "react";
import { useState, useMemo, useCallback } from 'react';

import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";
import WalletBox from "../../layouts/WalletBox";
import MessageBox from "../../layouts/MessageBox";
import PieChartBox from "../../layouts/PieChartBox";
import HistoryBox from "../../layouts/HistoryBox";
import BarChartBox from "../../layouts/BarChartBox";

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

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
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

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount!');
                };
            };
        });

        return total;
    }, [monthSelected, yearSelected]);

    const currentlyWallet = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (currentlyWallet < 0) {
            return {
                title: 'Poxa, que pena!',
                description: 'Neste mês você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tente cortar alguns gastos desnecessários',
                icon: sadSvg
            }
        }
        else if (totalGains === 0 && totalExpenses === 0) {
            return {
                title: 'Ooops!',
                description: 'Neste mês não há registros!',
                footerText: 'Não se esqueça de manter o app atualizado para você não se perder nas finanças.',
                icon: sadSvg
            }
        }
        else if (currentlyWallet === 0) {
            return {
                title: 'Uffa!',
                description: 'Neste mês você gastou exatamente o que ganhou!',
                footerText: 'Tenha cuidado, no próximo mês tente poupar o seu dinheiro.',
                icon: happySvg
            }
        }
        else {
            return {
                title: 'Muito Bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim, considere investir o seu valor!',
                icon: happySvg
            }
        }
    }, [currentlyWallet, totalGains, totalExpenses])

    const relationExpensesVersusGains = useMemo(() => {
        const total: number = totalGains + totalExpenses;
        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        return [
            {
                name: 'Entradas',
                value: totalGains,
                percent: Number(percentGains.toFixed(0)),
                color: '#E44C4E'
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: Number(percentExpenses.toFixed(0)),
                color: '#F7931B'
            },
        ]

    }, [totalGains, totalExpenses]);

    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter(expense => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return year === yearSelected && month === monthSelected;
        })
            .forEach(expense => {
                if (expense.frequency === 'recorrente') {
                    return amountRecurrent += Number(expense.amount);
                };
                if (expense.frequency === 'eventual') {
                    return amountEventual += Number(expense.amount);
                };
            });

        const total = amountEventual + amountRecurrent;
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            }
        ]
    }, [yearSelected, monthSelected]);

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter(gain => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return year === yearSelected && month === monthSelected;
        })
            .forEach(gain => {
                if (gain.frequency === 'recorrente') {
                    return amountRecurrent += Number(gain.amount);
                };
                if (gain.frequency === 'eventual') {
                    return amountEventual += Number(gain.amount);
                };
            });

        const total = amountEventual + amountRecurrent;
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            }
        ]
    }, [yearSelected, monthSelected]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let amountEntry = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('amountEntry é inválido! amountEntry deve ser um número válido!');
                    }
                }
            })
            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount);
                    } catch {
                        throw new Error('amountOutput é inválido! amountOutput deve ser um número válido!');
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substring(0, 3),
                amountEntry,
                amountOutput
            }

        })
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
            });
    }, [yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Valor do mês inválido! É aceito entre 0 - 24.');
        };
    }, []);

    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw new Error('Valor do ano inválido! É aceito somente números inteiros.');
        };
    }, []);

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
                <PieChartBox data={relationExpensesVersusGains} />
                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />
                <BarChartBox title={'Saídas'} data={relationExpensesRecurrentVersusEventual} />
                <BarChartBox title={'Entradas'} data={relationGainsRecurrentVersusEventual} />
            </Content>
        </Container>
    )
}

export default Dashboard