import { Container, Title } from './styles'
import { Button } from '@components/Button'
import { NavLink } from 'react-router-dom'

interface HeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    showButton?: boolean;
    textButtonHeader?: string;
    navLink?: string;
}

export function Header({ showButton, textButtonHeader, navLink = '/', ...rest }: HeaderProps) {
    return (
        <Container>
            <Title>NEKICARD</Title>
            {showButton &&
                <NavLink to={navLink}>
                    <Button {...rest} textButton={textButtonHeader}/>
                </NavLink>
            }
        </Container>
    )
}