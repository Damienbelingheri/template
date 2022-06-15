import React, { useMemo } from 'react';

import './styles/app.css';

import { ApolloProvider } from '@apollo/client';
import { ConfigurationContext as ApantConfigurationContext } from '@sparklink-pro/apant';
import { Layout } from 'antd';
import 'changeMe/translations/i18next';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import client from 'changeMe/apollo';
import { ConfigContext } from 'changeMe/context/ConfigContext';
// import * as operations from 'changeMe/gql';
// import types from 'changeMe/types';

const appNode = document.getElementById('app');
const config = JSON.parse(appNode?.getAttribute('config') ?? '');

const root = createRoot(appNode!);

// const typesRegistry = new TypesRegistry({ types, operations, apollo: client });

const { Content } = Layout;

function App() {
    const { t } = useTranslation();

    const apantConfig = useMemo(
        () => ({
            form: {
                labelCallback: t,
            },
            admin: {
                columnTitleCallback: t,
            },
        }),
        [],
    );

    return (
        <ApantConfigurationContext.Provider value={apantConfig}>
            <Layout className="h-screen">
                <Content className="p-0 m-0 ">
                    <div className="text-center bg-blue-200 ">Test</div>
                    {/* <Switch>
                        {routes.map((route) => (
                            <Route key={route.label} {...route.props} />
                        ))}
                    </Switch> */}
                </Content>
            </Layout>
        </ApantConfigurationContext.Provider>
    );
}

function Root() {
    return (
        <ApolloProvider client={client}>
            {/* <TypesContext.Provider value={typesRegistry}> */}
            <Router>
                <ConfigContext.Provider value={config}>
                    <App />
                </ConfigContext.Provider>
            </Router>
            {/* </TypesContext.Provider> */}
        </ApolloProvider>
    );
}

root.render(<Root />);
