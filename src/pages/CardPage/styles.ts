import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
`

export const ContainerCard = styled.div`
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`