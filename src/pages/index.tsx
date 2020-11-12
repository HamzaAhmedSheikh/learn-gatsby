import React from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';

 export default () => {
    return (
      <Layout headerTitle="Index Page Header">
        <Header text="This is a heading" subtext="The is the sub heading" /> 
        <p> We can link pages in Gatsby by using Link. </p>  
        <Link to="/about/"> About </Link> <br /> <br />
        <button onClick={() => { navigate('/about') }}>
           Navigate to About Page with button.
        </button>
      </Layout>  
    ) 
 }