import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>

                <h1>This could be the landing page for the application</h1>
                <p>
                    Edit <code>pages/hello.tsx</code> and save to reload.
                </p>
            </div>
        </Layout>
    );
}

export default Hello;