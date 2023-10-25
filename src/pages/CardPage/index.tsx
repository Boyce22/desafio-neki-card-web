/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { api } from '../../services/api'

import { useEffect } from 'react'
import { Header } from '@components/Header'
import { useParams } from 'react-router-dom';
import { CardUser } from '@components/CardUser'
import { Container, ContainerCard } from './styles'
import { CollaboratorDTO } from '../../dtos/CollaboratorDTO'

export function CardPage() {

    const [collaborator, setCollaborator] = useState({} as CollaboratorDTO)
    const { id } = useParams();

    async function fetchCollaboratorById() {
        const { data } = await api.get(`/collaborators/${id}`)
        setCollaborator(data)
    }
    useEffect(() => {
        fetchCollaboratorById()
    }, [])

    return (
        <Container>
            <Header
                showButton={true}
                textButtonHeader="Voltar"
                navLink="/login"
            />
            <ContainerCard>
                <CardUser
                    collaborator={collaborator}
                    isPreview
                />
            </ContainerCard>
        </Container>

    )
}