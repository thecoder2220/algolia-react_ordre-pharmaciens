import React from 'react';
import { SearchBox } from 'react-instantsearch/dom';
import { Col, Grid, Row, Image } from 'react-bootstrap';
import headerThumbnail from '../img/header.png';

const Header = () => (
  <div className="search-header">
    <Grid fluid={true}>
      <Row>
        <Col md={3}>
          <Image
            src={headerThumbnail}
            alt="Logo Ordre des Pharmaciens"
            responsive
          />
        </Col>
        <Col md={8} mdPull={1}>
          <SearchBox
            translations={{ placeholder: 'Entrez les termes de recherche' }}
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Header;
