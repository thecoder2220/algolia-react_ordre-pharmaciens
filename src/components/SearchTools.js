import React from 'react';
import { CurrentRefinements, HitsPerPage } from 'react-instantsearch/dom';

const SearchTools = () => (
  <div className="search-tools">
    {/* <SortBy
      defaultRefinement=""
      items={[
        { value: 'ecommerce', label: 'Tri par défaut' },
        {
          value: 'ecommerce_popularity_rank_asc',
          label: 'Popularité par ordre croissant',
        },
        {
          value: 'ecommerce_popularity_rank_desc',
          label: 'Popularité par ordre décroissant',
        },
      ]}
    />*/}
    <HitsPerPage
      defaultRefinement={10}
      items={[
        { value: 10, label: '10 résultats par page' },
        { value: 50, label: '50 résultats par page' },
        { value: 100, label: '100 résultats par page' },
      ]}
    />
    <CurrentRefinements
      // Transform the display of the current refinement widget to remove the name of the refined field from the label
      transformItems={items =>
        items.map(item => {
          const formattedItem = item;
          formattedItem.label = formattedItem.currentRefinement;
          return formattedItem;
        })
      }
    />
  </div>
);

export default SearchTools;
