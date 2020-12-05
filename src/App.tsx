import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Layout } from 'antd';
import { ReactQueryDevtools } from 'react-query-devtools'
import styles from './App.module.css'
import { cacheConfig } from './config/cache';
import 'antd/dist/antd.css'
import { Routes } from './Routes';
import { Navigation } from './components/Navigation/Navigation';

const { Header, Content, Footer } = Layout;

const queryCache = new QueryCache(cacheConfig)

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryDevtools initialIsOpen />
        <Layout className={`site-layout ${styles.layout}`} >
          <Router>
            <Navigation />
            <Header className={`site-layout-sub-header-background ${styles.header}`} />
            <Content className={styles.content}>
              <main className={`site-layout-background ${styles.contentWrapper}`}>
                <Routes />
              </main>
            </Content>
            <Footer className={styles.footer}>Footer</Footer>
          </Router>
        </Layout>
  </ReactQueryCacheProvider>
);

export default App;