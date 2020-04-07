export const dropdownItems = [
    'position',
    'colors',
    'speed',
    'edges'
];

export const spinnerConfig = {
    position: [
        {
            label: 'static',
            value: {position: 'static', bottom: '1em', right: '1em', left: 'auto', top: 'auto'},
            default: true
        },
        {
            label: 'absolute bottom right',
            value: {position: 'absolute', bottom: '1em', right: '1em', left: 'auto', top: 'auto'}
        },
        {
            label: 'absolute top left',
            value: {position: 'absolute', bottom: 'auto', right: 'auto', left: '1em', top: '1em'}
        },
    ],
    colors: [
        
        {
            label: '["#222", "#555"]',
            value: {colors: ['#222', '#555']},
            default: true
        },
        {
            label: '#0E80D0',
            value: {colors: '#0E80D0'}
        },
        {
            label: '["#FC646A", "#0E80D0", "#EABB74", "#00BA7D"]',
            value: {colors: ["#FC646A", "#0E80D0", "#EABB74", "#00BA7D"]}
        },
    ],
    speed: [
        {label: 'slow', value: {speed: 'slow'}},
        {label: 'normal', value: {speed: 'normal'}, default: true},
        {label: 'fast', value: {speed: 'fast'}},
    ],
    edges: [
        {label: 'round', value: {edges: 'round'}, default: true},
        {label: 'square', value: {edges: 'square'}},
    ],
    thick: false,
    size: {min: 20, max: 50}
};