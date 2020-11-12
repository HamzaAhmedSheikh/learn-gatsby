import React from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';


 export default () => {
    return (
      <Layout headerTitle="Index Page Header">
        <Header text="This is a heading" subtext="The is the sub heading" /> 
        <p> We can link pages in Gatsby by using Link. </p>  
        <Link to="/about/"> About </Link> <br /> <br />
        <Button variant="contained" color="primary" onClick={() => { navigate('/about') }}>
           Navigate to About Page with button.
        </Button> <br /> <br />
        <Link to="/app/">Go to Client Page 1</Link> <br /> <br />
        <Link to="/app/page1/">Go to Client Page 2</Link>
      </Layout>  
    ) 
 }