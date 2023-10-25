import styled, { css } from "styled-components";


type VariantButton = {
    variant?: 'next' | 'prev'
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    position: relative;
    @media (max-width: 1180px) {
        height: auto;
    }
`;

export const Title = styled.p`
    ${({ theme }) => css`
        color: ${theme.COLORS.ZINC};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.l}px;
        letter-spacing: 2px;
    `}
    margin-bottom: 1rem;
`

export const ContainerForm = styled.div`
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    align-items: center;
    align-self: center;
    margin-top: calc(40vh - (33rem / 2));
    justify-content: center;
    padding: 2rem;
`;


export const UserPhoto = styled.img`
    width: 14rem;
    height: 14rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_700};
`;

export const InputPhoto = styled.input`
    color:  ${({ theme }) => theme.COLORS.WHITE};
    opacity: 0;
`;

export const LabelInputPhoto = styled.label`
    background-color: ${({ theme }) => theme.COLORS.GREEN_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    width: 10rem;
    height: 3rem;
    cursor: pointer;
    text-align: center;
    padding: 0.2rem;
    &:hover{
        background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    @media (max-width: 1180px) {
        width: 12rem;
        flex-direction: column;
    }
`

export const InputDivider =styled.div`
    display: flex;
    gap: 2rem;
    @media (max-width: 480px) {
        display: inline;
    }
`

export const ButtonNext = styled.button<VariantButton>`
    ${({ theme, variant }) => css`
        background-color: ${variant === 'next' ? theme.COLORS.GREEN_600 : theme.COLORS.NEUTRAL_700};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        width: 29rem;
        height: 3.8rem;
        margin: 10px 0 10px 0;
        padding: 0.375rem;
        cursor: pointer;
        &:disabled {
            background-color: ${theme.COLORS.GREEN_700};
            cursor: not-allowed;    
        }
        &:not(:disabled)hover{
            background-color: ${variant === 'next' ? theme.COLORS.GREEN_700 : theme.COLORS.NEUTRAL_900};
        }
        @media (max-width: 1180px) {
            width: 10rem;
        }
    `}
`