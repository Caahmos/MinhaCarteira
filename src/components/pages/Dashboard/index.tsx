import React from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";

import {
    Container,
} from './styles'

const Dashboard: React.FC = () => {
    const options = [
        {value: 'Cauã', label: 'Cauã'},
        {value: 'Alex', label: 'Alex' },
        {value: 'Morales', label: 'Morales'},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard