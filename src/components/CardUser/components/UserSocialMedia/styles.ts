import styled, {css} from "styled-components";
import * as Icon from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const UserSocialMediaWrapper = styled.div`
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    align-items: center;
`
export const UserSocialMediaInfo = styled.p`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.ROBOTO};
        font-size: ${theme.FONT_SIZE.xs}px;
        color: ${theme.COLORS.WHITE};
    `}
    text-transform: uppercase;
    font-weight: 800;
`

export const InstaIcon = styled(Icon.IoLogoInstagram).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.PINK_INSTA,
}))``;
  
export const FaceIcon = styled(Icon.IoLogoFacebook).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.BLUE_FACE,
}))``;

export const LinkIcon = styled(Icon.IoLogoLinkedin).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.BLUE_LINK,
}))``;

export const GitIcon = styled(Icon.IoLogoGithub).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.ZINC_GIT,
}))``;