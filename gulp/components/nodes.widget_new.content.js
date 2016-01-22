const React = require('react');
const { connect } = require('react-redux');

const NameCategorySection = require('./nodes.widget_new.section.name_category');
const AddressSection = require('./nodes.widget_new.section.address');
const SimilarNodesSection = require('./nodes.widget_new.section.similar_nodes');
const AccessibilitySection = require('./nodes.widget_new.section.accessibility');
const ContactSection = require('./nodes.widget_new.section.contact');
const OverviewSection = require('./nodes.widget_new.section.overview');
const NodesForm = require('./nodes.form');
const { KEYS, NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('../models/nodes.widget_new.section');
const { activateSection } = require('../reducers/nodes.widget_new');

const SECTION_COMPONENTS = {
  [KEYS[NAME_CATEGORY]]: NameCategorySection,
  [KEYS[ADDRESS]]: AddressSection,
  [KEYS[SIMILAR_NODES]]: SimilarNodesSection,
  [KEYS[ACCESSIBILITY]]: AccessibilitySection,
  [KEYS[CONTACT]]: ContactSection,
  [KEYS[OVERVIEW]]: OverviewSection
};

const { shape, string, func } = React.PropTypes;

class Content extends React.Component {
  static propTypes = {
    params: shape({
      section: string.isRequired
    }).isRequired,
    activateSection: func.isRequired
  };

  render() {
    let { params: { section } } = this.props;

    let Section = SECTION_COMPONENTS[section];

    return (
      <div className="nodes-new-content">
        <NodesForm>
          <Section/>
        </NodesForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    activateSection: (section) => dispatch(activateSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);