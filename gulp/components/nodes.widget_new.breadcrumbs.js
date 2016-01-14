const React = require('react');
const { connect } = require('react-redux');
const classNames = require('classnames');
const I18n = require('./common.i18n');
const Section = require('../models/nodes.widget_new.section');

class Breadcrumbs extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.sections !== nextProps.sections;
  }

  render() {
    let { sections, onClickSection } = this.props,
      overviewSection = sections.find(section => section.id === Section.OVERVIEW),
      className = classNames({ done: overviewSection.done }),
      list = [];

    sections.forEach((section) => {
      // Skip overview as this section is not part of the breadcrumbs
      if (section === overviewSection)
        return;

      let className = classNames({ active: section.active, done: section.done });

      list.push(
        <li key={section.id} className={className}>
          <a href="#" onClick={() => onClickSection(section)}>
            <I18n scope={'nodes.new.form.section.' + section.key + '.name'}></I18n>
          </a>
        </li>
      );
    });

    return (
      <div className="nodes-new-breadcrumbs">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

module.exports = Breadcrumbs;