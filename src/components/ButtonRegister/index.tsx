import { ButtonRegisterStyled } from './styles'
import { NavLink } from 'react-router-dom'

export function ButtonRegister() {
    return (
        <NavLink to="/register">
            <ButtonRegisterStyled>
                New collaborator
            </ButtonRegisterStyled>
        </NavLink>
    )
}