import { CollaboratorDTO } from 'src/dtos/CollaboratorDTO'
import { UserSocialMedia } from './components/UserSocialMedia'

import {
    UserContainer, UserPhoto, UserTitle, UserInfo,
    DeleteIcon, EditIcon, IconWrapper, UserInfoWrapperRow, UserInfoWrapperColumn
} from './styles'

type CardUserProps = {
    collaborator: CollaboratorDTO;
    onDeleteCollaborator?: () => void;
    onEditCollaborator?: () => void;
    isPreview?: boolean;
}

export function CardUser({ collaborator, onDeleteCollaborator, onEditCollaborator, isPreview }: CardUserProps) {

    const imageUrlFromBackend = collaborator.profileImage;
    let imageName, frontendImageUrl;
    //replace é uma função do javascript que substitui uma string por outra, sendo o primeiro parâmetro o que será substituído e o segundo o que substituirá, 
    //é necessário async ou trycath para tratar erros e funcionar.
    try {
        const parts = imageUrlFromBackend.split('/');
        imageName = parts[parts.length - 1]
        frontendImageUrl = `../../../../assets/${imageName}`;
    } catch (error) {
        console.error('Error while processing image URL:', error);
        frontendImageUrl = 'https://example.com/default-image.png';
    }

    return (
        <>
            {!isPreview ?
                <UserContainer>
                    <IconWrapper>
                        <EditIcon
                            onClick={onEditCollaborator}
                        />
                        <DeleteIcon
                            onClick={onDeleteCollaborator}
                        />
                    </IconWrapper>
                    <UserInfoWrapperRow>
                        <UserPhoto
                            src={frontendImageUrl}
                        />
                        <UserInfoWrapperColumn>
                            <UserTitle>ID</UserTitle>
                            <UserInfo>{collaborator.id}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Nome</UserTitle>
                            <UserInfo>{collaborator.name}  {' '}  {collaborator.lastName}</UserInfo>
                        </UserInfoWrapperColumn>
                    </UserInfoWrapperRow>

                    <UserInfoWrapperRow>
                        <UserInfoWrapperColumn>
                            <UserTitle>Email</UserTitle>
                            <UserInfo>{collaborator.email}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Data de nasc</UserTitle>
                            <UserInfo>{collaborator.birthDate}</UserInfo>
                        </UserInfoWrapperColumn>

                    </UserInfoWrapperRow>
                    <UserInfoWrapperRow>
                        <UserInfoWrapperColumn>
                            <UserTitle>Nome Social</UserTitle>
                            <UserInfo>{collaborator.socialName}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Telefone</UserTitle>
                            <UserInfo>{collaborator.telephone}</UserInfo>
                        </UserInfoWrapperColumn>
                    </UserInfoWrapperRow>

                    <UserSocialMedia
                        facebook={collaborator.facebook}
                        github={collaborator.github}
                        instagram={collaborator.instagram}
                        linkedin={collaborator.linkedin}
                    />
                </UserContainer>
                : <UserContainer>
                    <UserInfoWrapperRow>
                        <UserPhoto
                            src={frontendImageUrl}
                        />
                        <UserInfoWrapperColumn>
                            <UserTitle>ID</UserTitle>
                            <UserInfo>{collaborator.id}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Nome</UserTitle>
                            <UserInfo>{collaborator.name}  {' '}  {collaborator.lastName}</UserInfo>
                        </UserInfoWrapperColumn>
                    </UserInfoWrapperRow>

                    <UserInfoWrapperRow>
                        <UserInfoWrapperColumn>
                            <UserTitle>Email</UserTitle>
                            <UserInfo>{collaborator.email}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Data de nasc</UserTitle>
                            <UserInfo>{collaborator.birthDate}</UserInfo>
                        </UserInfoWrapperColumn>

                    </UserInfoWrapperRow>
                    <UserInfoWrapperRow>
                        <UserInfoWrapperColumn>
                            <UserTitle>Nome Social</UserTitle>
                            <UserInfo>{collaborator.socialName}</UserInfo>
                        </UserInfoWrapperColumn>
                        <UserInfoWrapperColumn>
                            <UserTitle>Telefone</UserTitle>
                            <UserInfo>{collaborator.telephone}</UserInfo>
                        </UserInfoWrapperColumn>
                    </UserInfoWrapperRow>

                    <UserSocialMedia
                        facebook={collaborator.facebook}
                        github={collaborator.github}
                        instagram={collaborator.instagram}
                        linkedin={collaborator.linkedin}
                    />
                </UserContainer>
            }
        </>

    )
}
