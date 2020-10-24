import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
	body {
		background: ${theme.colors.background};
		color: ${theme.colors.color};
		font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
		transition: all 0.5s linear;
	}

	input {
		background: ${theme.colors.background};
		color: ${theme.colors.color};
	}

	.taskForm > button,
	.listControl > button {
		border: 1px solid ${theme.colors.border};
		background-color: ${theme.colors.background};
		color: ${theme.colors.color};
	}

	a {
		color: ${theme.colors.color};
	}
`}
`;
