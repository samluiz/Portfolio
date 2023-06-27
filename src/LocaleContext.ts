import React from 'react';

const defaultValue = {
  locale: 'en',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocale: (string: string) => {}
};

export default React.createContext(defaultValue);
