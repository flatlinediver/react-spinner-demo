import React, { FC, useState } from 'react';
import { Dropdown, Slider, Toggle, Item, Head } from '@ui';
import { useStore } from '../../store';
import { dropdownItems, dropdownOptions, DropDownOption, DropDownOptionValue } from '../../utils';
import { Wrapper } from './style';

const Sidebar: FC = () => {
  const { store, updateStore } = useStore();
  const [opened, setOpened] = useState({
    position: false,
    colors: false,
    speed: false,
    edges: false,
  });

  const handleSetOpened = (el: DropDownOption) => {
    const current = { ...opened };
    Object.keys(current).forEach(
      (k) => (current[k as DropDownOption] = k === el ? !current[k] : false)
    );
    setOpened(current);
  };

  const checkColor = (el: DropDownOption, c: DropDownOptionValue) => {
    if (typeof c.value[el] !== typeof store[el]) return false;
    if (Array.isArray(c.value[el])) {
      const storeColors = store[el] as string[];
      const dropDownColors = c.value[el] as string[];
      return (
        dropDownColors.length === storeColors?.length &&
        dropDownColors.every((v, i) => v === storeColors[i])
      );
    }

    return c.value[el] === store[el];
  };

  const checkActive = (el: DropDownOption, c: DropDownOptionValue) => {
    if (!store) return;
    let isCurrent = false;
    switch (el) {
      case 'position':
        isCurrent = c.value[el] === store[el] && c.value.top === store.top;
        break;
      case 'colors':
        isCurrent = checkColor(el, c);
        break;
      default:
        isCurrent = c.value[el] === store[el];
    }
    return isCurrent;
  };

  return (
    <Wrapper>
      <Head />
      {dropdownItems.map((el, k) => (
        <Dropdown key={k} label={el} setOpened={() => handleSetOpened(el)} opened={opened[el]}>
          {dropdownOptions[el].map((c, i) => (
            <Item
              key={i}
              active={checkActive(el, c)}
              onClick={() => updateStore(c.value)}
              isColor={el === 'colors'}
              label={el === 'colors' ? c.value.colors : c.label}
            />
          ))}
        </Dropdown>
      ))}
      <Toggle handleClick={() => updateStore({ thick: !store.thick })} bool={store.thick} />
      <Slider
        value={store.size as number}
        onChange={(e) => updateStore({ size: parseInt(e.target.value) })}
        min={20}
        max={50}
      />
    </Wrapper>
  );
};

export default Sidebar;
