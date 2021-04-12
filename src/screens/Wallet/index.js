import React, { useState } from 'react';
import {
    Feather,
    MaterialCommunityIcons,
    FontAwesome,
    AntDesign
} from '@expo/vector-icons';

import { Switch } from 'react-native';

import { 
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardDescription,
    Img,
    CardFooter,
    AddCardButton,
    AddCardLabel,
    PromoCodeButton,
    PromoCodeLabel,
 } from './styles';

 import creditCard from '../../images/credit-card.png';

const Wallet = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header
                colors={
                    useBalance
                    ? ['#00fc6c', '#00ac4a']
                    : ['#d3d3d3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI.
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

                <Switch
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>
                Forma de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>Cadastre seu cartão de crédito</CardTitle>

                            <CardDescription>
                                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardDescription>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddCardButton>
                        <AntDesign name="pluscircleo" size={25} color="#0DB060" />
                        <AddCardLabel>Adicionar cartão de crédito</AddCardLabel>
                    </AddCardButton>

                </Card>

                <PromoCodeButton>
                    <MaterialCommunityIcons name="ticket-percent-outline" size={20} color="#0DB060" />

                    <PromoCodeLabel>Usar código promocional</PromoCodeLabel>
                </PromoCodeButton>
            </PaymentMethods>
        </Wrapper>
    );
}

export default Wallet;