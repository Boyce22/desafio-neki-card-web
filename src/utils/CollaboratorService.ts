import { api } from "../services/api";
import { AppError } from "./AppError";

export type PersonalData = {
    name: string;
    lastName: string;
    birthDate: string;
    socialName: string;
}

export type ContactData = {
    email: string;
    telephone: string;
    linkedin: string;
    github: string;
    instagram: string;
    facebook: string;
}

function formatDate(inputDate: string) {
    const dateParts = inputDate.split('/');
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    return `${year}-${month}-${day}`;
}

export async function collaboratorRegister(personalData: PersonalData, contactData: ContactData) {
    const formattedPersonalData = { ...personalData, birthDate: formatDate(personalData.birthDate) };
    const collaborator = { ...formattedPersonalData, ...contactData };
    try {
        await api.post('/collaborators/signUp', collaborator);
    } catch (error) {
        throw new AppError('Falha ao registrar o colaborador. Verifique suas credenciais.');
    }
}

export async function uploadProfileImage(email: string, photoCollaborator: File) {
    const formData = new FormData();
    formData.append('photo', photoCollaborator);
    try {
        await api.post(`/collaborators/photo/${email}`, formData);
    } catch (error) {
        throw new AppError('Falha ao fazer o upload da imagem do perfil.');
    }
}


export async function collaboratorUpdate(personalData: PersonalData, contactData: ContactData, photoCollaborator: File, id: number) {
    const formattedPersonalData = personalData.birthDate ? { ...personalData, birthDate: formatDate(personalData.birthDate) } : personalData;
    const collaborator = { ...formattedPersonalData, ...contactData };
    try {
        await api.put(`/collaborators/update/${id}`, collaborator);
    } catch (error) {
        throw new AppError('Falha ao atualizar o colaborador. Verifique suas credenciais.');
    }
    if (photoCollaborator && photoCollaborator.size !== 0) {
        try {
            await uploadProfileImage(collaborator.email, photoCollaborator);
        } catch (error) {
            throw new AppError('Falha ao fazer o upload da nova imagem do perfil.');
        }
    }
}


export function collaboratorDelete(collaboratorId: number) {
    try {
        api.delete(`/collaborators/delete/${collaboratorId}`);
    } catch (error) {
        throw new AppError('Failed to delete collaborator. Please check your credentials.');
    }
}

export async function fetchAllCollaborators() {
    try {
        const { data } = await api.get('/collaborators/findAll/active');
        return data;
    } catch (error) {
        console.log(error);
    }
}