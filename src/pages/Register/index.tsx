/* eslint-disable react-hooks/exhaustive-deps */
import * as z from 'zod';
import { useEffect, useState } from 'react'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { collaboratorRegister, ContactData, PersonalData, uploadProfileImage } from '@utils/CollaboratorService'
import { Container, ContainerForm, InputWrapper, ButtonNext, Title, UserPhoto, InputPhoto, LabelInputPhoto, InputDivider } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

export function Register() {
    const navigate = useNavigate();
    const [secondPart, setSecondPart] = useState(false);
    const [personalData, setPersonalData] = useState<PersonalData>({} as PersonalData);
    const [contactData, setContactData] = useState<ContactData>({} as ContactData);
    const [photoCollaborator, setPhotoCollaborator] = useState<File>({} as File);
    const [isDisabled, setIsDisabled] = useState(true);

    const personalDataSchema = z.object({
        name: z.string().min(3),
        lastName: z.string().min(3),
        socialName: z.string(),
        birthDate: z.string(),  
    });
    
    const contactDataSchema = z.object({
        email: z.string().refine((email) => {
            return email.endsWith('@neki.com.br') || email.endsWith('@neki-it.com.br');
        }),    
    })

    function isFormValid() {
        try {
            personalDataSchema.parse(personalData);
            contactDataSchema.parse(contactData);
            setIsDisabled(false)
        } catch (error) {
            setIsDisabled(true)
        }
    }

    function handleSecondPart() {
        setSecondPart(prevState => !prevState);
    }

    function handlePreviousPart() {
        setSecondPart(prevState => !prevState);
    }

    async function handleSubmit() {
        try {
            await collaboratorRegister(personalData, contactData);
            await uploadProfileImage(contactData.email, photoCollaborator);
            toast.success("Collaborator successfully registered", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        } catch (error) {
            toast.error("Make sure you send an image and don't repeat the email", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    }

    useEffect(() => {
        isFormValid()
    }, [personalData, contactData])

    return (
        <Container>
            <Header
                showButton
                textButtonHeader='Login'
                navLink='/login'
            />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                limit={1}
            />
            {!secondPart ?
                <ContainerForm >
                    <Title>Register Collaborator</Title>
                    <InputDivider>
                        <InputWrapper>
                            <Input
                                variant='form'
                                placeholder='Name'
                                name="name"
                                value={personalData.name}
                                onChange={(e) => setPersonalData(prevState => ({ ...prevState, name: e.target.value }))}
                            />
                            <Input
                                variant='form'
                                placeholder='Lastname'
                                name="lastname"
                                value={personalData.lastName}
                                onChange={(e) => setPersonalData(prevState => ({ ...prevState, lastName: e.target.value }))}
                            />
                            <Input
                                variant='form'
                                placeholder='Social Name'
                                name="socialName"
                                value={personalData.socialName}
                                onChange={(e) => setPersonalData(prevState => ({ ...prevState, socialName: e.target.value }))}
                            />

                            <Input
                                variant='form'
                                placeholder='BirthDate'
                                name="birthDate"
                                value={personalData.birthDate}
                                onChange={(e) => setPersonalData(prevState => ({ ...prevState, birthDate: e.target.value }))}
                            />
                            <Input
                                type='email'
                                variant='form'
                                placeholder='E-mail'
                                name="email"
                                value={contactData.email}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, email: e.target.value }))}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                variant='form'
                                placeholder='Your telephone'
                                name="telephone"
                                value={contactData.telephone}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, telephone: e.target.value }))}
                            />

                            <Input
                                variant='form'
                                placeholder='Your Linkedin'
                                name="linkedin"
                                value={contactData.linkedin}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, linkedin: e.target.value }))}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Github'
                                name="github"
                                value={contactData.github}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, github: e.target.value }))}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Instagram'
                                name="instagram"
                                value={contactData.instagram}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, instagram: e.target.value }))}
                            />
                            <Input
                                variant='form'
                                placeholder='Your Facebook'
                                name="facebook"
                                value={contactData.facebook}
                                onChange={(e) => setContactData(prevState => ({ ...prevState, facebook: e.target.value }))}
                            />
                        </InputWrapper>
                    </InputDivider>


                    <ButtonNext variant='next' onClick={handleSecondPart} disabled={isDisabled}>Next</ButtonNext>
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
                        <ButtonNext variant='prev' onClick={handlePreviousPart}>Previous</ButtonNext>
                        <ButtonNext variant='next' onClick={handleSubmit} disabled={isDisabled}>Finish</ButtonNext>
                    </InputWrapper>
                </ContainerForm>
            }
        </Container >
    )
}