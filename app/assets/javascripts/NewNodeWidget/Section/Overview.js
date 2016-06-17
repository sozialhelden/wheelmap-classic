import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';

import Section from './Section';
import I18n from '../../common/I18n';
import { Map, Marker } from '../../common/Mapbox';
import { NAME_CATEGORY, ADDRESS, ACCESSIBILITY, CONTACT, OVERVIEW } from '../models/sections';
import actions from '../actions';
import selectors from '../selectors';
import { nodeTypesSelector, categoriesSelector } from '../../common/selectors';
import { node, nodeType, category, immutableListOf } from '../../common/propTypes';

const { func, bool } = React.PropTypes;

function OverviewSection({ node, nodeTypes, loading, categories, onClickAction }) {
  let nodeTypeTrans = '—';
  let street = '—';
  let city = '—';
  let website = '—';

  const nodeType = nodeTypes.find(nodeType => nodeType.identifier === node.nodeType);

  if (nodeType != null) {
    const category = categories.get(nodeType.category);
    nodeTypeTrans = I18n.t(`poi.name.${category.identifier}.${nodeType.identifier}`);
  }

  if (node.street != null && node.housenumber != null) {
    street = `${node.street} ${node.housenumber}`;
  }

  if (node.postcode != null && node.city != null) {
    city = `${node.postcode} ${node.city}`;
  }

  const icon = nodeType != null ? nodeType.icon : null;
  const location = node.location();

  const marker = (
    <Marker
      position={location}
      wheelchair={node.wheelchair}
      icon={icon}
    />
  );

  if (node.website != null) {
    website = <a href={node.website}>{node.website}</a>;
  }

  return (
    <Section section={OVERVIEW} onClickAction={onClickAction} actionLabelScope="actions.save" loading={loading}>
      <div>
        <h3>Name & Kategorie:</h3>
        <dl className="nodes-new-content-section--overview-list">
          <dt><I18n scope="activerecord.attributes.poi.name" />:</dt>
          <dd>{node.name || '—'}</dd>
          <dt><I18n scope="activerecord.attributes.poi.type" />:</dt>
          <dd>{nodeTypeTrans}</dd>
        </dl>
        <Link
          to={Routes.newNodeSectionPath({ section: NAME_CATEGORY })}
          className="nodes-new-content-section--overview-edit"
        >
          <I18n scope="nodes.node_edit.edit" /> <i className="icon-chevron-right" />
        </Link>
      </div>
      <div>
        <h3><I18n scope="activerecord.attributes.poi.address" />:</h3>
        <dl className="nodes-new-content-section--overview-list">
          <dt><I18n scope="activerecord.attributes.poi.address_street" />:</dt>
          <dd>{street}</dd>
          <dt><I18n scope="activerecord.attributes.poi.address_city" />:</dt>
          <dd>{city}</dd>
        </dl>
        <Map
          center={location}
          zoom={16}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          keyboard={false}
          zoomControl={false}
          className="nodes-new-content-section--overview-map"
        >
          {marker}
        </Map>
        <Link
          to={Routes.newNodeSectionPath({ section: ADDRESS })}
          className="nodes-new-content-section--overview-edit"
        >
          <I18n scope="nodes.node_edit.edit" /> <i className="icon-chevron-right" />
        </Link>
      </div>
      <div>
        <h3><I18n scope="nodes.new.form.section.accessibility.name" />:</h3>
        <dl className="nodes-new-content-section--overview-list">
          <dt>Status:</dt>
          <dd><I18n scope={`wheelchairstatus.${node.wheelchair}`} className={node.wheelchair} /></dd>
          <dt>WC-Status:</dt>
          <dd><I18n scope={`toiletstatus.${node.wheelchairToilet}`} className={node.wheelchairToilet} /></dd>
        </dl>
        <Link
          to={Routes.newNodeSectionPath({ section: ACCESSIBILITY })}
          className="nodes-new-content-section--overview-edit"
        >
          <I18n scope="nodes.node_edit.edit" /> <i className="icon-chevron-right" />
        </Link>
      </div>
      <div>
        <h3><I18n scope="nodes.new.form.section.contact.name" />:</h3>
        <dl className="nodes-new-content-section--overview-list">
          <dt><I18n scope="activerecord.attributes.poi.website" />:</dt>
          <dd>{website}</dd>
          <dt><I18n scope="activerecord.attributes.poi.phone" />:</dt>
          <dd>{node.phone || '—'}</dd>
        </dl>
        <Link
          to={Routes.newNodeSectionPath({ section: CONTACT })}
          className="nodes-new-content-section--overview-edit"
        >
          <I18n scope="nodes.node_edit.edit" /> <i className="icon-chevron-right" />
        </Link>
      </div>
    </Section>
  );
}

OverviewSection.propTypes = {
  onClickAction: func.isRequired,
  node: node.isRequired,
  loading: bool.isRequired,
  nodeTypes: immutableListOf(nodeType),
  categories: immutableListOf(category)
};

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  nodeTypes: nodeTypesSelector,
  categories: categoriesSelector,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.saveNode
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewSection);
