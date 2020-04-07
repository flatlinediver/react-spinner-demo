import React, { useState, useContext } from 'react';
import { Dropdown, Slider, Toggle, Item, Head } from '../../components';
import {ConfigContext} from '../../utils/configContext';
import {spinnerConfig, dropdownItems} from '../../utils';
import { Wrapper } from './style';

export default () => {
    const { spinnerProps, modifySpinner } = useContext(ConfigContext)
    const [ opened, setOpened ] = useState({
        position: false,
        colors: false,
        speed: false,
        edges: false
    });
    const [ thick, setThick ] = useState(false);
    const [ size, setSize ] = useState(32);
    const handleSetOpened = el => {
        const current = {...opened};
        Object.keys(current).forEach( k => current[k] = k === el ? !current[k] : false );
        setOpened(current);
    }
    const setItem = value => {
        modifySpinner(value);
        handleSetOpened()
    }

    const handleTick = () => {
        setThick(!thick);
        modifySpinner({thick: !thick})
    }
    const handleSlider = ({target: {value}}) => {
        setSize(value)
        modifySpinner({size: value})
    }
    const checkActive = (el, c) => {
        const isCurrent = el === 'position'
            ? c.value[el] === spinnerProps[el] && c.value.top === spinnerProps.top
            : c.value[el] === spinnerProps[el]
        ;
        const isDefault = spinnerProps[el] === undefined && c.default
        return isCurrent || isDefault
    }
    return (
        <Wrapper>
                <Head />
                {dropdownItems.map((el, k) => (
                    <Dropdown key={k} label={el} setOpened={() => handleSetOpened(el)} opened={opened[el]}>
                        {spinnerConfig[el].map((c, i) => (
                            <Item
                                key={i}
                                active={checkActive(el, c)}
                                onClick={() => setItem(c.value)}
                            >
                                {c.label.charAt(0).toUpperCase() + c.label.slice(1)}{c.default && ' (default)'}
                            </Item>
                        ))}
                    </Dropdown>
                ))}
                <Toggle handleClick={handleTick} bool={spinnerProps.thick}/>
                <Slider value={size} onChange={handleSlider} {...spinnerConfig.size} />
        </Wrapper>
    )
}