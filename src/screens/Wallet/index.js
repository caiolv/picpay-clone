import React from 'react';
import { Feather } from '@expo/vector-icons';

import { 
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info
 } from './styles';

const Wallet = () => {
  return (
        <Wrapper>
            <Header colors={['#00fc6c', '#00ac4a']}>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>

                        <EyeButton>
                            <Feather name="eye" size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI.
                    </Info>
                </HeaderContainer>
            </Header>
        </Wrapper>
    );
}

export default Wallet;