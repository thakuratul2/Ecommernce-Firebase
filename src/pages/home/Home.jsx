import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';


const Home = () => {
  const context = useContext(myContext);
 // console.log(context);
 const {name,age} = context;
  return (
  <Layout>
    <h1>Name : {name}</h1>
    
    <h1>Age : {age}</h1>
  </Layout>
  );
}

export default Home;
