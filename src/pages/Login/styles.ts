import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
`;

export const ContainerForm = styled.div`
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    width: 36rem;
    height: 33rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    align-items: center;
    align-self: center;
    margin-top: calc(40vh - (33rem / 2));
    
    @media (max-width: 575px) {
        width: 80%;
        padding: 1rem;
    }
`;

export const Title = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.ZINC};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.xl}px;
    `}
    letter-spacing: 2px;
    font-weight: 700;
    margin: 4rem;
`;

export const MessageRegister = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.ZINC};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.sm}px;
    `}
    margin-top: 2rem;
    text-align: center;
`;

export const RedirectLink = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.GREEN_400};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.md}px;
    `}
    text-align: center;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GREEN_600};
    }
`;



