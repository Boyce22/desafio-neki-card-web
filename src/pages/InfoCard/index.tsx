import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

import { Header } from '@components/Header'
import { CardUser } from '@components/CardUser'
import { CardNeki } from '@components/CardNeki'
import { EditModal } from '@components/EditModal'
import { TilteWriter } from '@components/Typewriter'
import { InputSearch } from '@components/InputSearch'
import { DeleteModal } from '@components/DeleteModal'
import { ButtonRegister } from '@components/ButtonRegister'

import { Container, SecionInfo, CardsContainer, Mask } from './styles'
import { CollaboratorDTO } from '@dtos/CollaboratorDTO'
import { collaboratorDelete, fetchAllCollaborators } from '@utils/CollaboratorService'

export function InfoCard() {

    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [collaboratorNameSearch, setCollaboratorNameSearch] = useState('');
    const [collaborators, setCollaborators] = useState<CollaboratorDTO[]>([]);
    const [collaboratorId, setCollaboratorId] = useState<number>(0);
    const { logout } = useAuth();

    function handleOpenModal(id: number) {
        setVisible(true);
        setCollaboratorId(id);
    }

    function handleOpenModalEdit(id: number) {
        setVisibleEdit(true);
        setCollaboratorId(id);
    }

    async function fetchAllCollaboratorsAndUpdate() {
        const data = await fetchAllCollaborators();
        setCollaborators(data);
    }

    async function deleteCollaborator() {
        if (collaboratorId !== null) {
            collaboratorDelete(collaboratorId);
            setVisible(false);
        }
    }

    useEffect(() => {
        fetchAllCollaboratorsAndUpdate();
    }, [visible, visibleEdit]);


    return (
        <Container>
            <Header
                showButton
                textButtonHeader="Logout"
                navLink="/login"
                onClick={logout}
            />
            <SecionInfo>
                <TilteWriter />
                <CardNeki />
            </SecionInfo>

            {visible && (
                <>
                    <DeleteModal
                        title="Deseja deletar o colaborador?"
                        subtitle="Ao deletar não será possível desfazer esta ação!"
                        onClose={() => setVisible(false)}
                        onDelete={deleteCollaborator}
                    />
                    <Mask />
                </>
            )}
            {visibleEdit && (
                <>
                    <EditModal
                        onClose={() => setVisibleEdit(false)}
                        id={collaboratorId}
                    />
                    <Mask />
                </>
            )}
            <InputSearch
                onChange={(event) => setCollaboratorNameSearch(event.target.value)}
            />
            <CardsContainer>
                {collaborators
                    .filter((collaborator) =>
                        collaborator.name
                            .toLowerCase()
                            .includes(collaboratorNameSearch.toLowerCase())
                    )
                    .map((collaborator) => (
                        <CardUser
                            key={collaborator.id}
                            onDeleteCollaborator={() => handleOpenModal(collaborator.id)}
                            onEditCollaborator={() => handleOpenModalEdit(collaborator.id)}
                            collaborator={collaborator}
                        />
                    ))}
            </CardsContainer>
            <ButtonRegister />
        </Container>
    );
}