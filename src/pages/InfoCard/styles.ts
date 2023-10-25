import styled, { css } from "styled-components";


export const Mask = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
    `}
    width: 100%;
    height: 100%;
    opacity: 0.9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.NEUTRAL_700};
    `}
`

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.COLORS.BLACK_700};
    `}
   
`

export const SecionInfo = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.NEUTRAL_700};
    `}
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    align-items: center;

    @media (max-width: 1035px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
`

export const CardsContainer = styled.section`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.NEUTRAL_700};
    `}
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    align-items: center;
    flex-wrap: wrap;
`