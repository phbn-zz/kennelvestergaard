import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Puppies from '@sections/Puppies';
import Bitch from '@sections/Bitch';
import Gallery from '@sections/Gallery';
import Terms from '@sections/Terms';
import About from '@sections/About';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Puppies />
    <Bitch />
    <Gallery />
    <Terms />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
