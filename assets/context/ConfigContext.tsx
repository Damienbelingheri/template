import { createContext } from 'react';

export const ConfigContext = createContext<{
    formatDate?: string;
    defaultDisplay?: string;
    username?: string;
    logout?: string;
    isAdmin?: boolean;
    translations?: object;
    switchUser?: string;
    isImpersoned?: boolean;
    impersonedExitPath?: string;
}>({});

export default ConfigContext;
