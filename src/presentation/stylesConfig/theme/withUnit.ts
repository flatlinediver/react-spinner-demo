type ItemsWithUnit<T> = T & { [P in keyof T & string as `_${P}`]: T[P] };

const withUnit = <T>(items: T, unit = 'em'): ItemsWithUnit<T> => {
  let newObj = {};
  Object.keys(items).forEach((key) => {
    const originalElement = items[key as keyof T];
    if (typeof originalElement !== 'number') {
      newObj = {
        ...newObj,
        [key]: originalElement,
      };
      return;
    }
    newObj = {
      ...newObj,
      [`_${key}`]: originalElement,
      get [key]() {
        return `${originalElement}${unit}`;
      },
    };
  });
  return newObj as ItemsWithUnit<T>;
};

export default withUnit;
