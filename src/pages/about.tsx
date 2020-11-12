import React from 'react'
import { Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from './about.module.css';

export default () => {
    return (
      <Layout headerTitle="About Page Header">
        <div> <h2> Hello World </h2> </div>
          <Link to='/'> Back </Link>
        <div className={styles.myDiv}>
          This is Second Div.  
        </div>
      </Layout>
        
    )
}
