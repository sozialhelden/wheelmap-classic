const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');

const Section = require('./Section');
const I18n = require('../../common/I18n');
const { NAME_CATEGORY, ADDRESS, ACCESSIBILITY, CONTACT, OVERVIEW } = require('../models/sections');
const actions = require('../actions');
const selectors = require('../selectors');
const { nodeTypesSelector } = require('../../common/selectors/nodeTypes');
const { categoriesSelector } = require('../../common/selectors/categories');

const { func } = React.PropTypes;

class OverviewSection extends React.Component {
  static propTypes = {
    onClickNext: func,
    onClickEdit: func
  };

  render() {
    const { node, nodeTypes, loading, categories, onClickAction, onClickEdit } = this.props;

    let nodeTypeTrans = '—',
      street = '—', city = '—', website = '—';

    const nodeType = nodeTypes.find(nodeType => nodeType.identifier === node.nodeType);

    if (nodeType != null) {
      const category = categories.get(nodeType.category);
      nodeTypeTrans = I18n.t(`poi.name.${category.identifier}.${nodeType.identifier}`);
    }

    if (node.street != null && node.housenumber != null)
      street = `${node.street} ${node.housenumber}`;

    if (node.postcode != null && node.city != null)
      city = `${node.postcode} ${node.city}`;

    if (node.website != null)
      website = <a href={node.website}>{node.website}</a>;

    return (
      <Section section={OVERVIEW} onClickAction={onClickAction} actionLabelScope="actions.save" loading={loading}>
        <div>
          <h3>Name & Kategorie:</h3>
          <dl className="nodes-new-content-section--overview-list">
            <dt><I18n scope="activerecord.attributes.poi.name"/>:</dt>
            <dd>{node.name || '—'}</dd>
            <dt><I18n scope="activerecord.attributes.poi.type"/>:</dt>
            <dd>{nodeTypeTrans}</dd>
          </dl>
          <a className="nodes-new-content-section--overview-edit"
             onClick={onClickEdit.bind(null, NAME_CATEGORY)}>
            <I18n scope="nodes.node_edit.edit"/> <i className="icon-chevron-right"/>
          </a>
        </div>
        <div>
          <h3><I18n scope="activerecord.attributes.poi.address"/>:</h3>
          <dl className="nodes-new-content-section--overview-list">
            <dt><I18n scope="activerecord.attributes.poi.address_street"/>:</dt>
            <dd>{street}</dd>
            <dt><I18n scope="activerecord.attributes.poi.address_city"/>:</dt>
            <dd>{city}</dd>
          </dl>
          <a className="nodes-new-content-section--overview-edit"
             onClick={onClickEdit.bind(null, ADDRESS)}>
            <I18n scope="nodes.node_edit.edit"/> <i className="icon-chevron-right"/>
          </a>
        </div>
        <div>
          <h3><I18n scope="nodes.new.form.section.accessibility.name"/>:</h3>
          <dl className="nodes-new-content-section--overview-list">
            <dt>Status:</dt>
            <dd><I18n scope={`wheelchairstatus.${node.wheelchair}`} className={node.wheelchair}/></dd>
            <dt>WC-Status:</dt>
            <dd><I18n scope={`toiletstatus.${node.wheelchairToilet}`} className={node.wheelchairToilet}/></dd>
          </dl>
          <a className="nodes-new-content-section--overview-edit"
             onClick={onClickEdit.bind(null, ACCESSIBILITY)}>
            <I18n scope="nodes.node_edit.edit"/> <i className="icon-chevron-right"/></a>
        </div>
        <div>
          <h3><I18n scope="nodes.new.form.section.contact.name"/>:</h3>
          <dl className="nodes-new-content-section--overview-list">
            <dt><I18n scope="activerecord.attributes.poi.website"/>:</dt>
            <dd>{website}</dd>
            <dt><I18n scope="activerecord.attributes.poi.phone"/>:</dt>
            <dd>{node.phone || '—'}</dd>
          </dl>
          <a className="nodes-new-content-section--overview-edit"
             onClick={onClickEdit.bind(null, CONTACT)}>
            <I18n scope="nodes.node_edit.edit"/> <i className="icon-chevron-right"/>
          </a>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  nodeTypes: nodeTypesSelector,
  categories: categoriesSelector,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.saveNode,
    onClickEdit: actions.navigateToSection
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewSection);