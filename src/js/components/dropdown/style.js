import styled from 'styled-components'
import { commonStyles } from '../../utils';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 1em;
`
export const Content = styled.div`
    width: 100%;
    z-index: 2;
    will-change: max-height;
    transition: ${({theme}) => theme.defaultTransition('max-height')};
    max-height: ${({maxHeight}) => `${maxHeight}px`};
    `
export const Button = styled.button`
    ${({theme}) => commonStyles.box({theme})};
    transition: ${({theme}) => theme.defaultTransition()};
    width: 100%;
    padding: 2em;
    outline: none;
    border: none;
    text-transform: capitalize;
    border-bottom: 2px solid ${({opened, theme}) => opened ? theme.blue() : 'white'};
    border-radius: ${({opened}) => opened ? '.2em .2em 0 0' : '.2em'};
    z-index: 3;
    text-align: left;
    cursor: pointer;
    position: relative;
`
export const Svg = styled.svg`
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%) rotate(${({opened}) => opened ? '540deg' : 0});
    transition: ${({theme}) => theme.defaultTransition()};
    line {
        stroke: ${({theme}) => theme.blue()};
    }
`;