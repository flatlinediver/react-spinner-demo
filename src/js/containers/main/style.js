import styled from 'styled-components';
import { commonStyles } from '../../utils';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.grey()};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
	@media (max-width: ${({theme: {mBP}}) => mBP}px) {
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;
        height: unset;
        min-height: 120px;
    }
`;
export const InnerWrapper = styled.div`
    ${({theme}) => commonStyles.box({theme})};
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2em;
	@media (max-width: ${({theme: {mBP}}) => mBP}px) {
        box-shadow: none;
        background: none;
        width: 100%;
        height: 100%;
    }
`;