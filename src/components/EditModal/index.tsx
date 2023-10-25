import { useState } from 'react'
import { Input } from '@components/Input'
import { ButtonNext, ContainerForm, InputPhoto, InputWrapper, LabelInputPhoto, Title, UserPhoto, CloseIcon, InputDivider } from './styles'
import { ContactData, PersonalData, collaboratorUpdate } from '../../utils/CollaboratorService'

type EditModalProps = {
    onClose: () => void;
    id: number | null;
}

export function EditModal({ id, onClose }: EditModalProps) {
    const [secondPart, setSecondPart] = useState(false);
    const [personalData, setPersonalData] = useState<PersonalData>({} as PersonalData);
    const [contactData, setContactData] = useState<ContactData>({} as ContactData);
    const [photoCollaborator, setPhotoCollaborator] = useState<File>({} as File);

    function handleToggle() {
        setSecondPart((prevState) => !prevState);
    }

    async function handleSubmit() {
        onClose();
        await collaboratorUpdate(personalData, contactData, photoCollaborator, id as number);
    }

    return (
        <>
            {!secondPart ?
                <ContainerForm >
                    <CloseIcon
                        onClick={onClose}
                    />
                    <Title>Edit Collaborator</Title>
                    <InputDivider>
                        <InputWrapper>
                            <Input
                                variant='form'
                                placeholder='Name'
                                name="name"
                                value={personalData.name}
                                onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Lastname'
                                name="lastname"
                                value={personalData.lastName}
                                onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Social Name'
                                name="socialName"
                                value={personalData.socialName}
                                onChange={(e) => setPersonalData({ ...personalData, socialName: e.target.value })}
                            />


                            <Input
                                variant='form'
                                placeholder='BirthDate'
                                name="birthDate"
                                value={personalData.birthDate}
                                onChange={(e) => setPersonalData({ ...personalData, birthDate: e.target.value })}
                            />

                            <Input
                                type='email'
                                variant='form'
                                placeholder='E-mail'
                                name="email"
                                value={contactData.email}
                                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                variant='form'
                                placeholder='Your telephone'
                                name="telephone"
                                value={contactData.telephone}
                                onChange={(e) => setContactData({ ...contactData, telephone: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Linkedin'
                                name="linkedin"
                                value={contactData.linkedin}
                                onChange={(e) => setContactData({ ...contactData, linkedin: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Github'
                                name="github"
                                value={contactData.github}
                                onChange={(e) => setContactData({ ...contactData, github: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Instagram'
                                name="instagram"
                                value={contactData.instagram}
                                onChange={(e) => setContactData({ ...contactData, instagram: e.target.value })}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Facebook'
                                name="facebook"
                                value={contactData.facebook}
                                onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                            />
                        </InputWrapper>
                    </InputDivider>
                    <ButtonNext variant='next' onClick={handleToggle}>Next</ButtonNext>
                </ContainerForm>
                :
                <ContainerForm>
                    <Title>Register Collaborator</Title>
                    <Title>Send the collaborator's photo</Title>
                    <UserPhoto
                        src={photoCollaborator.name ? URL.createObjectURL(photoCollaborator) : 'https://www.w3schools.com/howto/img_avatar.png'}
                    />
                    <LabelInputPhoto htmlFor="photo">
                        Insert Image
                        <InputPhoto
                            type="file"
                            id="photo"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setPhotoCollaborator(e.target.files?.[0] as File)}
                        />
                    </LabelInputPhoto>
                    <InputWrapper>
                        <ButtonNext variant='prev' onClick={handleToggle}>Previous</ButtonNext>
                        <ButtonNext variant='next' onClick={handleSubmit}>Finish</ButtonNext>
                    </InputWrapper>
                </ContainerForm>
            }
        </>
    )
}
