import { Container, Title, SubTitle, WarningIcon, Button, ButtonWrapper } from './styles'

type DeleteModalProps = {
    title: string;
    subtitle: string;
    onDelete: () => void;
    onClose: () => void;
}

export function DeleteModal({ title, subtitle, onDelete, onClose }: DeleteModalProps) {
    return (
        <Container>
            <WarningIcon />
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <ButtonWrapper>
                <Button
                    variant='cancel'
                    onClick={onClose}
                >Cancelar</Button>
                <Button
                    variant='delete'
                    onClick={onDelete}
                >Deletar</Button>
            </ButtonWrapper>
        </Container>
    )
}