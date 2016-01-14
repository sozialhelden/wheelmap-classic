const React = require('react');
const Section = require('../models/nodes.widget_new.section');
const NameCategorySection = require('./nodes.widget_new.section.name_category');
const AddressSection = require('./nodes.widget_new.section.address');
const SimilarNodesSection = require('./nodes.widget_new.section.similar_nodes');
const AccessibilitySection = require('./nodes.widget_new.section.accessibility');
const ContactSection = require('./nodes.widget_new.section.contact');
const OverviewSection = require('./nodes.widget_new.section.overview');

const SECTIONS = {
  [Section.NAME_CATEGORY]: NameCategorySection,
  [Section.ADDRESS]: AddressSection,
  [Section.SIMILAR_NODES]: SimilarNodesSection,
  [Section.ACCESSIBILITY]: AccessibilitySection,
  [Section.CONTACT]: ContactSection,
  [Section.OVERVIEW]: OverviewSection
};

class Content extends React.Component {
  render() {
    let { activeSection, onClickSection } = this.props,
      content;

    if (activeSection != null) {
      let Section = SECTIONS[activeSection.id];
      content = <Section section={activeSection}/>
    }

    return (
      <div className="nodes-new-content">
        <div class="node-form">
          {content}
        </div>
      </div>
    );
  }
}

module.exports = Content;