import styled, { css } from "styled-components";
import * as Icon from 'react-icons/io';

export const UserContainer = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
    `}
    width: 23rem;
    height: 28rem;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.2);
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &:hover {
        transform: scale(1.02);
    }
`

export const UserPhoto = styled.img`
    ${({ theme }) => css`
        border: 1px solid ${theme.COLORS.BLACK_700};
    `}
    width: 8rem;
    height: 8rem;
    margin: 1rem;

    @media (max-width: 380px) {
        width: 4rem;
        height: 4rem;
    }
    @media (max-width: 415px) {
        width: 6rem;
        height: 7rem;
    }
`

export const UserInfoWrapperRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const UserInfoWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    text-align: start;
`

export const UserTitle = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.sm}px;
        color: ${theme.COLORS.WHITE};
    `}
    text-transform: uppercase;
    font-weight: 800;
    text-align: start;
`

export const UserInfo = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.xs}px;
        color: ${theme.COLORS.WHITE};
    `}
    text-transform: uppercase;
    font-weight: 400;
`

export const IconWrapper = styled.div`
    display: flex;
    gap: 0.225rem;
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
`

export const EditIcon = styled(Icon.IoMdCreate).attrs(({ theme }) => ({
    size: 25,
    color: theme.COLORS.ZINC_GIT,
}))`
    cursor: pointer;
`;

export const DeleteIcon = styled(Icon.IoMdTrash).attrs(({ theme }) => ({
    size: 25,
    color: theme.COLORS.RED_500,
}))`
    cursor: pointer;
`;


