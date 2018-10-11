import React from 'react';
import { Menu } from 'react-instantsearch/dom';
import { Grid, Col, Row } from 'react-bootstrap';

const SiteSelector = () => (
  <div className="site-selector">
    <Grid fluid={true}>
      <Row>
        <Col md={1} />
        <Col md={8}>
          <Menu attribute="document.site" />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default SiteSelector;
