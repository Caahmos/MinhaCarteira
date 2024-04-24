import React from "react";
import {
    Container,
    ChartContainer
} from './styles';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

interface IHistoryBoxProps {
    data: {
        monthNumber: number,
        month: string,
        amountEntry: number,
        amountOutput: number
    }[];
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}


const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => {
    console.log(data)
    return (
        <Container>
            <h2>Historico de Saldo</h2>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="amountEntry"
                            name="Entradas"
                            stroke={lineColorAmountEntry}
                            strokeWidth={3}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas"
                            stroke={lineColorAmountOutput}
                            strokeWidth={3}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    )
}

export default HistoryBox