import { createContext } from 'react';

const defaultValues = { color: 'cyan' };
const ThemeContext = createContext(defaultValues);


export default ThemeContext;
