import styled from 'styled-components';
import { commonStyles } from '../../../utils';

export const Wrapper = styled.button`
    ${({theme}) => commonStyles.box({theme})};
    width: 100%;
    color: ${({theme}) => theme.dark()};
    border-radius: 0;
    padding: 2em;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.blue()};
    text-align: left;
    cursor: pointer;
    position: relative;
`;
export const Svg = styled.svg`
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    transition: ${({theme}) => theme.defaultTransition()};
    opacity: ${({active}) => active ? 1 : 0};
    path {
        fill: ${({theme}) => theme.green()};
    }
`;