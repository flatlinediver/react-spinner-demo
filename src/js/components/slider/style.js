import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Quicksand;
`
export const Input = styled.input`
    border: 0; 
    outline: none;
    -webkit-appearance: none;
    background: white;
    height: 7px;
    border-radius: 3.5px;
    &::-moz-range-track {
        background: white;
        border: 0;
        outline: none;
        height: 7px;
        border-radius: 3.5px;
    }
    &::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        transition: background .15s ease-in-out;
        border: 3px solid ${({theme}) => theme.blue()};
        &:hover {
            border: 3px solid ${({theme}) => theme.green()};
        }
    }
    &::-moz-range-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        transition: background .15s ease-in-out;
        border: 3px solid ${({theme}) => theme.blue()};
        &:hover {
            border: 3px solid ${({theme}) => theme.green()};
        }
    }
    &:active::-moz-range-thumb {
    }
`