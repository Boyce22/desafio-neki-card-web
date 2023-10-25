import { FaceIcon, GitIcon, InstaIcon, LinkIcon, UserSocialMediaInfo, UserSocialMediaWrapper, Container } from './styles'

type UserSociamMediaProps = {
    instagram: string;
    facebook: string;
    github: string;
    linkedin: string;
}

export function UserSocialMedia({ instagram, facebook, github, linkedin }: UserSociamMediaProps) {
    return (
        <Container>
            <UserSocialMediaWrapper>
                <FaceIcon />
                <UserSocialMediaInfo>{facebook}</UserSocialMediaInfo>
            </UserSocialMediaWrapper>
            <UserSocialMediaWrapper>
                <GitIcon />
                <UserSocialMediaInfo>{github}</UserSocialMediaInfo>
            </UserSocialMediaWrapper>
            <UserSocialMediaWrapper>
                <InstaIcon />
                <UserSocialMediaInfo>{instagram}</UserSocialMediaInfo>
            </UserSocialMediaWrapper>
            <UserSocialMediaWrapper>
                <LinkIcon />
                <UserSocialMediaInfo>{linkedin}</UserSocialMediaInfo>
            </UserSocialMediaWrapper>
        </Container>
    )
}