import React, {useState} from 'react';
import { Dropdown, Slider, Toggle, Item, Head } from '../../components';
import {useStore} from '../../store';
import {dropdownItems, spinnerOptions} from '../../utils';
import { Wrapper } from './style';

export default () => {
    const { store, handlers } = useStore();
    const [ opened, setOpened ] = useState({
        position: false,
        colors: false,
        speed: false,
        edges: false
    });

    const handleSetOpened = el => {
        const current = {...opened};
        Object.keys(current).forEach( k => current[k] = k === el ? !current[k] : false );
        setOpened(current);
    }
    const checkActive = (el, c) => {
        if(store) {
            const isCurrent = el === 'position'
                ? c.value[el] === store[el] && c.value.top === store.top
                : c.value[el] === store[el]
            ;
            const isDefault = store[el] === undefined && c.default
            return isCurrent || isDefault

        }
    }

    const formatLabel = (c) => `${c.label.charAt(0).toUpperCase()}${c.label.slice(1)} ${c.default ? ' (default)' : ''}`;
    return (
        <Wrapper>
                <Head />
                {dropdownItems.map((el, k) => (
                    <Dropdown
                        key={k}
                        label={el}
                        setOpened={() => handleSetOpened(el)}
                        opened={opened[el]}
                    >
                        {spinnerOptions[el].map((c, i) => (
                            <Item
                                key={i}
                                active={checkActive(el, c)}
                                onClick={() => handlers[el](c.value)}
                            >
                                {formatLabel(c)}
                            </Item>
                        ))}
                    </Dropdown>
                ))}
                <Toggle handleClick={handlers.thick} bool={store.thick}/>
                <Slider value={store.size} onChange={handlers.size} {...spinnerOptions.size} />
        </Wrapper>
    )
}