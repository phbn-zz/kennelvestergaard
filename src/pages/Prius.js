import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Masonry from '../components/common/Masonry'
import Layout from '@common/Layout';
import { Container } from '@components/global';

const Prius = () => (
  <Layout>
    <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "prius" } }) {
          edges {
            node {
              relativePath
              id
              childImageSharp {
                fluid {
                  aspectRatio
                  src
                  originalImg
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
    <Container>
      <h1>Hanhund</h1>
      <p>
        Prius er importeret fra England og er efter den mest vindende tæve på
          markprøve i England i de senere år. Han har to søskende i England som
          sidst jagtsæson tog SDC “A”, hvor Helen havde dem begge med på samme
          prøve. Prius har en enestående evne til afkobling og er megt lydhør over
          for, hvad der ønskes af ham.
      </p>
        <Masonry
            itemsPerRow={[2]} // This will be changed to `[2, 3]` later
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid,
              caption: `${node.relativePath}`,
              id: `${node.id}`
            }))}
          />
        <Link to="/">Go back to the homepage</Link>
        
      </Container>
      )}
  />
  </Layout>
);

export default Prius;
