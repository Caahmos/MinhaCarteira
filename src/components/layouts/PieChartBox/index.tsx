import React from "react";
import CountUp from 'react-countup'

import {
    Container,
    LegendContainer,
    SideLeft,
    SideRigth,
    Legend
} from './styles'

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts'

interface IPieChartProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
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
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicador) => (
                                <Cell key={indicador.name} fill={indicador.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRigth>
    </Container>
)


export default PieChartBox