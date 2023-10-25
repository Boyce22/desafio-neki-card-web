import Typewriter from "typewriter-effect";
import { Container } from './styles'

export function TilteWriter() {
    return (
        <Container>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Nekicard")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Gerencie talentos com facilidade!")
                        .start();
                }}
            />
        </Container>

    );
}