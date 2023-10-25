import styled, { css } from 'styled-components';
import * as Icon from 'react-icons/io'


export const Container = styled.div`
    margin-top: 4rem;
    margin-left: 12.8rem;
    @media (max-width: 880px) {
        display: flex;
        justify-content: center;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 4rem;
    }
`
export const SearchInput = styled.input`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.md}px;
    `}
    padding: 0.3rem;
    width: 100%;
    &:focus {
        outline: none;
    }
`

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_600};
        border: 1px solid ${theme.COLORS.BLACK_700};
    `}
    display: flex;
    width: 30rem;
`

export const SearchIcon = styled(Icon.IoIosSearch).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.ZINC_GIT,
}))`
    border-left: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_800};
    padding: 0.235rem;
`;

