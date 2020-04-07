export default {
    red: (opacity = 1) => `rgba(252,100,106,${opacity})`,
    blue: (opacity = 1) => `rgba(14,128,208,${opacity})`,
    green: (opacity = 1) => `rgba(0,186,125,${opacity})`,
    yellow: (opacity = 1) => `rgba(234,187,116,${opacity})`,
    dark: (opacity = 1) => `rgba(2,2,2,${opacity})`,
    grey: (opacity = 1) => `rgba(241,242,247,${opacity})`,
    lightGrey: (opacity = 1) => `rgba(249,250,252,${opacity})`,
    defaultTransition: (type = "all", s = 0.3) => `${type} cubic-bezier(0.15, 0.82, 1, 1) ${s}s`,
    shadow: (color = 'rgba(2,2,2,.05)') => `0 1px 12px 0 ${color}`,
    activeShadow: (color = 'rgba(2,2,2,.05)') => `0 5px 12px 0 ${color}`,
    mBP: 900,
    spinnerColor: 'red'
};