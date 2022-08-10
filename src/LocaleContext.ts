import React from 'react'

const defaultValue = {
    locale: 'en',
    setLocale: (string: string) => {},
}

export default React.createContext(defaultValue)
