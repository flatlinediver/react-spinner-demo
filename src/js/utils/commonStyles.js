import {css} from 'styled-components';

export default {
    box: ({theme}) => css`
        background: white;
        border-radius: .5em;
        box-shadow: ${theme.shadow()};
        padding: 1em;
    `
}