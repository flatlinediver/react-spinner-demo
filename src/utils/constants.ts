export const dropdownItems = ['position', 'colors', 'speed', 'edges'] as const;

export type DropDownOption = typeof dropdownItems[number];
export type DropDownOptionValue = {
  label: string;
  value: { [key: string]: string | string[] };
};

export const dropdownOptions: Record<DropDownOption, DropDownOptionValue[]> = {
  position: [
    {
      label: 'static',
      value: { position: 'static', bottom: '1em', right: '1em', left: 'auto', top: 'auto' },
    },
    {
      label: 'absolute bottom right',
      value: { position: 'absolute', bottom: '1em', right: '1em', left: 'auto', top: 'auto' },
    },
    {
      label: 'absolute top left',
      value: { position: 'absolute', bottom: 'auto', right: 'auto', left: '1em', top: '1em' },
    },
  ],
  colors: [
    {
      label: '["#222", "#555"]',
      value: { colors: ['#222', '#555'] },
    },
    {
      label: '#F0835C',
      value: { colors: '#F0835C' },
    },
    {
      label: '["#FBCA6E", "#F0835C", "#2C3659", "#89CBDB"]',
      value: { colors: ['#FBCA6E', '#F0835C', '#2C3659', '#89CBDB'] },
    },
  ],
  speed: [
    { label: 'slow', value: { speed: 'slow' } },
    { label: 'normal', value: { speed: 'normal' } },
    { label: 'fast', value: { speed: 'fast' } },
  ],
  edges: [
    { label: 'round', value: { edges: 'round' } },
    { label: 'square', value: { edges: 'square' } },
  ],
};
