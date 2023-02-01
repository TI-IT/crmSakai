import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

export default function MyApp({ Component, pageProps }) {
    const server_host = process.env.NODE_ENV === 'development' ? 'http://localhost:9001' : 'https://crm.servertiit.keenetic.pro';
    if (Component.getLayout) {
        return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
    } else {
        return (
            <LayoutProvider>
                <Layout>
                    <Component {...pageProps} server_host={server_host} />
                </Layout>
            </LayoutProvider>
        );
    }
}
