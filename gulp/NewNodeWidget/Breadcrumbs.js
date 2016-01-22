const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');
const classNames = require('classnames');

const I18n = require('../common/I18n');
const SectionModel = require('./models/Section');

const { sections } = require('./types');
const { func, string } = React.PropTypes;

class Breadcrumbs extends React.Component {
  static propTypes = {
    sections: sections.isRequired,
    onNavigate: func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.sections !== nextProps.sections;
  }

  render() {
    let { sections, onNavigate } = this.props,
      overviewSection = sections.find(section => section.id === SectionModel.OVERVIEW),
      className = classNames({ done: overviewSection.active }),
      list = [];

    sections.forEach((section) => {
      // Skip overview as this section is not part of the breadcrumbs
      if (section === overviewSection)
        return;

      const { id, key, active, done } = section;
      const className = classNames({ active, done });

      const onClick = event => {
        event.preventDefault();

        onNavigate(section);
      };

      list.push(
        <li key={id} className={className}>
          <a href="#" onClick={onClick}>
            <I18n scope={`nodes.new.form.section.${key}.name`}></I18n>
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