const React = require('react');
const { connect } = require('react-redux');

const NameCategorySection = require('./Section/NameCategory');
const AddressSection = require('./Section/Address');
const SimilarNodesSection = require('./Section/SimilarNodes');
const AccessibilitySection = require('./Section/Accessibility');
const ContactSection = require('./Section/Contact');
const OverviewSection = require('./Section/Overview');
const NodesForm = require('../common/Node/Form');
const { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('./models/sections');
const { activateSection } = require('./actions');

const SECTION_COMPONENTS = {
  [NAME_CATEGORY]: NameCategorySection,
  [ADDRESS]: AddressSection,
  [SIMILAR_NODES]: SimilarNodesSection,
  [ACCESSIBILITY]: AccessibilitySection,
  [CONTACT]: ContactSection,
  [OVERVIEW]: OverviewSection
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