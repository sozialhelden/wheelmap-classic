const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');
const classNames = require('classnames');

const I18n = require('../common/I18n');
const Section = require('./models/Section').default;
const { OVERVIEW } = require('./models/sections');

const { immutableListOf } = require('../common/types');
const { func, instanceOf } = React.PropTypes;

class Breadcrumbs extends React.Component {
  static propTypes = {
    sections: immutableListOf(instanceOf(Section)).isRequired,
    activeSection: instanceOf(Section),
    onNavigate: func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.activeSection !== nextProps.activeSection;
  }

  render() {
    const { sections, activeSection, onNavigate } = this.props;
    const className = classNames({ done: activeSection === OVERVIEW });
    const list = [];
    const activeSectionIndex = sections.findIndex(section => section === activeSection);

    sections.forEach((section, index) => {
      // Skip overview as this section is not part of the breadcrumbs
      if (section === OVERVIEW)
        return;

      const done = index < activeSectionIndex;
      const className = classNames({ active: section === activeSection, done });

      const onClick = event => {
        event.preventDefault();

        onNavigate(section);
      };

      list.push(
        <li key={section} className={className}>
          <a href="#" onClick={onClick}>
            <I18n scope={`nodes.new.form.section.${section}.name`}></I18n>
          </a>
        </li>
      );
    });

    return (
      <div className="nodes-new-breadcrumbs">
        <ul className={className}>
          {list}
        </ul>
      </div>
    );
  }
}

module.exports = Breadcrumbs;