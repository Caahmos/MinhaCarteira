import React from "react";
import ContentHeader from "../../layouts/ContentHeader";
import SelectInput from "../../layouts/SelectInput";

import {
    Container,
} from './styles'

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
        </Container>
    )
}

export default List