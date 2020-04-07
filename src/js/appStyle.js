import styled from 'styled-components'

export const Wrapper = styled.div`
	transition: ${({theme}) => theme.defaultTransition()};
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: ${({theme}) => theme.grey()};
	position: relative;
	overflow-x: hidden;

`;