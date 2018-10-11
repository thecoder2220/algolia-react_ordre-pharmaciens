import React from 'react';
import { Col, Glyphicon, Grid, Row, Image, Label } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Highlight, Hits, Pagination, Stats } from 'react-instantsearch/dom';
import {
  connectPagination,
  connectStateResults,
} from 'react-instantsearch/connectors';
import cespharmIcon from '../img/favicon.ico';

function shortString(string, length, reverse) {
  // returns the string but with acceptableShortness length AND one of the stopChars at the end

  const stopChars = [' ', '/', '&'];
  const acceptableShortness = length * 0.8; // When to start looking for stop characters
  const reverted = typeof reverse !== 'undefined' ? reverse : false;
  const s = reverted
    ? string
        .split('')
        .reverse()
        .join('')
    : string;
  let shortenedString = '';

  for (let i = 0; i < length - 1; i++) {
    shortenedString += s[i];
    if (i >= acceptableShortness && stopChars.indexOf(s[i]) >= 0) {
      break;
    }
  }

  if (reverted) {
    return shortenedString
      .split('')
      .reverse()
      .join('');
  } else if (shortenedString) {
    return shortenedString;
  }

  return null;
}

function shortUrl(url, length) {
  // Shorten a URL to return only a "www.your-website.com" and eventually some '...' in the middle if it's too long

  const l = typeof length !== 'undefined' ? length : 50;
  const chunkLength = l / 2;
  const cutUrl = url.replace('http://', '').replace('https://', '');

  if (cutUrl.length <= l) {
    return cutUrl;
  }

  const startChunk = shortString(cutUrl, chunkLength, false);
  const endChunk = shortString(cutUrl, chunkLength, true);
  return `${startChunk}...${endChunk}`;
}

const PdfIcon = () => (
  <span className="pdf-icon">
    <Label bsStyle="danger">
      <Glyphicon glyph="file" />
      PDF
    </Label>
  </span>
);

// Define each result template
const Hit = ({ hit }) => (
  <a rel="noreferrer noopener" href={hit.document.url} target="_blank">
    <div className="hit">
      <Grid fluid={true}>
        <Row>
          <Col md={8} lg={11}>
            <span className="hit-name">
              {hit.document.site === 'Cespharm' ? (
                <Image src={cespharmIcon} />
              ) : null}
              {hit.document.type === 'application/pdf' ? <PdfIcon /> : null}
              <b>
                <a
                  rel="noreferrer noopener"
                  href={hit.document.url}
                  target="_blank"
                >
                  <Highlight attribute="document.name" hit={hit} />
                </a>
              </b>
            </span>
            <br />
            <span className="hit-url">{shortUrl(hit.document.url, 256)}</span>
            <div className="hit-content">
              <Highlight attribute="content" hit={hit} />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  </a>
);

// props validation
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

const ConnectedHits = connectStateResults(
  ({ searchState, searchResults }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      <Hits hitComponent={Hit} />
    ) : (
      <div className="no-results">Aucun résultat pour {searchState.query}.</div>
    )
);

const ConnectedPagination = connectPagination(
  ({ nbPages }) => (nbPages > 1 ? <Pagination showLast /> : null)
);

const Results = () => (
  <div className="results">
    <Stats
      translations={{
        stats(n, ms) {
          return `${n.toLocaleString()} résultats (${ms.toLocaleString()} ms)`;
        },
      }}
    />
    <ConnectedHits />
    <div className="pagination">
      <ConnectedPagination />
    </div>
  </div>
);

export default Results;
