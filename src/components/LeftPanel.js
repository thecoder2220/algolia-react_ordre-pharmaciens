import React from 'react';
import { HierarchicalMenu, Panel } from 'react-instantsearch/dom';
import { connectCurrentRefinements } from 'react-instantsearch/connectors';

const LeftPanel = connectCurrentRefinements(({ items }) => {
  const isCespharmRefined = items.find(
    ({ attribute, currentRefinement }) =>
      attribute === 'document.site' && currentRefinement.includes('Cespharm')
  );

  return (
    <div className="left-panel">
      {isCespharmRefined ? (
        <Panel header="Thématique">
          <HierarchicalMenu
            attributes={[
              'document.thematique.lvl0',
              'document.thematique.lvl1',
              'document.thematique.lvl2',
            ]}
          />
        </Panel>
      ) : null}
      <Panel header="Type">
        <HierarchicalMenu
          attributes={[
            'document.typeDocument.lvl0',
            'document.typeDocument.lvl1',
            'document.typeDocument.lvl2',
          ]}
        />
      </Panel>
    </div>
  );
});

export default LeftPanel;
