import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const Prius = () => (
  <Layout>
    <Container>
      <h1>Hanhund</h1>
      <p>
        Prius er importeret fra England og er efter den mest vindende tæve på
        markprøve i England i de senere år. Han har to søskende i England som
        sidst jagtsæson tog SDC “A”, hvor Helen havde dem begge med på samme
        prøve. Prius har en enestående evne til afkobling og er megt lydhør over
        for, hvad der ønskes af ham.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default Prius;
