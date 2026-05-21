import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Bloglist from '../components/Bloglist';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Bloglist/>
      <Newsletter/>
    </>
  )
}

export default Home;