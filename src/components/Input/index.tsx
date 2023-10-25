import { useState } from 'react';
import { Input as InputStyled, Container, AtIcon, InputWrapper, KeyIcon, OpenEyeIcon, CloseEyeIcon, AtonIcon } from './styles'

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'password' | 'form';
}

export function Input({ variant = 'default', ...rest }: PropsInput) {
    const [visible, setVisible] = useState(false);

    function handleChangeVisibility() {
        setVisible(prevState => !prevState);
    }

    const inputProps = {
        ...rest,
        type: variant === 'password' && visible ? 'text' : 'password'
    };

    return (
        <Container>
            {variant === 'password' ? (
                <InputWrapper>
                    <KeyIcon />
                    <InputStyled {...inputProps} />
                    {visible ? (
                        <OpenEyeIcon onClick={handleChangeVisibility} />
                    ) : (
                        <CloseEyeIcon onClick={handleChangeVisibility} />
                    )}
                </InputWrapper>
            ) : variant === 'form' ? (
                <InputWrapper>
                    <AtonIcon />
                    <InputStyled {...inputProps} type='text' />
                </InputWrapper>
            ) : (
                <InputWrapper>
                    <AtIcon />
                    <InputStyled {...inputProps} type='text' />
                </InputWrapper>
            )}
        </Container>
    );
}