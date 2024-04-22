import React from "react";
import { Container } from './styles';
import CountUp from "react-countup";

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps{
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const iconSelected = {dolar: dolarImg, arrowUp: arrowUpImg, arrowDown: arrowDownImg }

const WalletBox: React.FC<IWalletBoxProps> = ({ title, amount, footerLabel, icon, color }) => {

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp end={amount} prefix={"R$ "} separator="." decimal="," decimals={2} />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected[icon]} alt={title} />
        </Container>
    )
}

export default WalletBox