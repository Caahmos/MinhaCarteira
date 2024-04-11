import React from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";

import {
    Container,
    Content,
    Filters
} from './styles'
import HistoryFinanceCard from "../../layouts/HistoryFinanceCard";

const List: React.FC = () => {
    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto' },
        {value: 9, label: 'Setembro'},
    ]

    const years = [
        {value: 2020, label: 2024},
        {value: 2019, label: 2023},
        {value: 2018, label: 2022},
    ]

    return (
        <Container>
            <ContentHeader title="Lista">
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
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" tagColor="#E44C4E" />
            </Content>
        </Container>
    )
}

export default List