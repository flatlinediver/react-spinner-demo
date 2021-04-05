import React, { FC } from 'react';
import { Wrapper, Dot } from './style';
import Check from './check';

interface Item {
  active: boolean | undefined;
  onClick: () => void;
  label: string | string[];
  isColor: boolean;
}

const Item: FC<Item> = ({ onClick, active, label, isColor }) => {
  const formattedLabel = (l: string) => `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
  const formatColors = (l: string[] | string) => {
    if (!Array.isArray(l)) return <Dot bg={l} />;
    return (label as string[]).map((k, i) => <Dot key={i} bg={k} />);
  };

  const renderLabel = isColor ? formatColors(label) : formattedLabel(label as string);

  return (
    <Wrapper aria-label="dropdown option" onClick={onClick}>
      <Check active={active} />
      {renderLabel}
    </Wrapper>
  );
};

export default Item;
