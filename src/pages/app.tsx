import React from "react"
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import ClientPage1  from '../components/Client1';
import Default from '../components/DefaultClient';
import { graphql } from "gatsby";
import Moment from 'react-moment';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



 const App = ({data}) => {
   console.log(data);
   
   return (
    <Layout headerTitle="App Page Header">
     {/* <Router basepath="/app">
      <ClientPage1 path="/page1" />
      <Default path="/" />
     </Router> */}
     <div> Hello World Hamza </div>
     <br /> 
     {/* <div> {data.allContentfulBlogPost.edges[0].node.title} </div>
     <div> {data.allContentfulBlogPost.edges[0].node.publicationDate} </div>
     <div> {data.allContentfulBlogPost.edges[0].node.content.raw} </div>
      <br /> <br />
     <div> {data.allContentfulBlogPost.edges[1].node.title} </div>
     <div> {data.allContentfulBlogPost.edges[1].node.publicationDate} </div>
     <div> {data.allContentfulBlogPost.edges[1].node.content.raw} </div> */}
    </Layout> 

   )      
 }

 export default App;

//  export const query = graphql`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             title
//             publicationDate
//             content {
//               raw
//             }
//           }
//         }
//       }
//     }
//  `