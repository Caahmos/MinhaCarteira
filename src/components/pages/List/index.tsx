import React from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";

import {
    Container,
    Content
} from './styles'
import HistoryFinanceCard from "../../layouts/HistoryFinanceCard";

const List: React.FC = () => {
    const options = [
        {value: 'Cauã', label: 'Cauã'},
        {value: 'Alex', label: 'Alex' },
        {value: 'Morales', label: 'Morales'},
    ]

    return (
        <Container>
            <ContentHeader title="Lista">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
                <HistoryFinanceCard title="Conta de Luz" subtitle="10/04/2024" amount="R$ 130,00" cardColor="#313862" tagColor="#E44C4E" />
            </Content>
        </Container>
    )
}

export default List