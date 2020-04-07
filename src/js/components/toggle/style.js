import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: Quicksand;
`;
export const Button = styled.button`
    border: none;
    outline: none;
    width: 38px;
    height: 18px;
    border-radius: 32px;
    background: white;
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;
export const Circle = styled.div`
    border-radius: 50%;
    transition: ${({theme}) => theme.defaultTransition()};
    height: 13px;
    width: 13px;
    background: ${({theme}) => theme.blue()};
    display: block;
    transform: ${({bool}) => bool ? 'translateX(2.5px)' : 'translateX(calc(100% + 8.5px))'};
    opacity: ${({bool}) => bool ? 1 : .4};
`;