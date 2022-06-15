import { useContext } from 'react';

import { ConfigContext } from 'changeMe/context/ConfigContext';

const useConfig = () => useContext(ConfigContext);

export default useConfig;
