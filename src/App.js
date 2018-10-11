import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import Results from './components/Results';
import SearchTools from './components/SearchTools';
import SiteSelector from './components/SiteSelector';
import { Configure, InstantSearch } from 'react-instantsearch/dom';
import { Col, Grid, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InstantSearch
          appId="47CSD2QLER"
          apiKey="7ccda4f3b6cd0f8d132da7bd8b8caf7e"
          indexName="dev_textblocks_with_metadata_type_and_theme"
          stalledSearchDelay={1000}
        >
          <Configure facetingAfterDistinct={true} />
          <Grid fluid={true}>
            <Row>
              <Header />
            </Row>
            <Row>
              <SiteSelector />
            </Row>
            <Row>
              <Col md={1}>
                <LeftPanel />
              </Col>
              <Col md={8}>
                <SearchTools />
                <Results />
              </Col>
            </Row>
          </Grid>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
