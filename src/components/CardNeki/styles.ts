import styled, { css, keyframes } from "styled-components";

const CardAnimation = keyframes`
	0% {
		transform: translateY(0) rotate(-21.2deg);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	50% {
		transform: translateY(-15px) rotate(-21deg);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}

	100% {
		transform: translateY(0) rotate(-21deg);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
`;

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
    `}
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 300px;
    animation: ${CardAnimation} infinite 2s;
`;

export const CardContent = styled.div`
    padding: 20px;
    transform: rotate(90deg);
`;

export const CardTitle = styled.h1`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
        color: ${theme.COLORS.ZINC};
        font-family: ${theme.FONT_FAMILY.ROBOTO};
     `}
    font-size: 24px;
    margin: 0;
    position: absolute;
    top: 15%;
    left: 85%;
    transform:rotate(-1deg);
`;


export const CardPonta = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
    `}
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    transform: rotate(6deg);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;

