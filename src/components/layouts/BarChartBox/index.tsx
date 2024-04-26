import React from 'react'
import CountUp from 'react-countup';
import formatCurrency from '../../../utils/formatCurrency';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip
} from 'recharts'

import {
    Container,
    SideLeft,
    SideRigth,
    LegendContainer,
    Legend
} from './styles'

interface IBarChartProps {
    title: string;
    data: {
        name: string,
        amount: number,
        percent: number,
        color: string
    }[];
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>
                    {
                        data.map(legend => (
                            <Legend color={legend.color} key={legend.name}>
                                <div><CountUp end={legend.percent} />%</div>
                                <span>{legend.name}</span>
                            </Legend>
                        ))
                    }

                </LegendContainer>
            </SideLeft>
            <SideRigth>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Tooltip formatter={ (prev) => { return formatCurrency(Number(prev)) }} />
                        <Bar dataKey="amount">
                            {
                                data.map((indicator) => (
                                    <Cell key={indicator.name} cursor="pointer" fill={indicator.color} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </SideRigth>
        </Container>
    )
}

export default BarChartBox;