import { InputWrapper, SearchIcon, SearchInput, Container } from './styles'

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {

}
export function InputSearch({ ...rest }: InputSearchProps) {
    return (
        <Container>
            <InputWrapper>
                <SearchInput
                    {...rest}
                />
                <SearchIcon />
            </InputWrapper>
        </Container>
    )
}