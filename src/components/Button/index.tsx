import { Button as ButtonStyled } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textButton?: string;
}

export function Button({ textButton, ...rest }: ButtonProps) {
    return (
        <ButtonStyled {...rest}>{textButton}</ButtonStyled>
    )
}