const React = require('react');
const { connect } = require('react-redux');

const Section = require('./Section');
const Form = require('../../common/Form');
const { navigateToNextSection, tryFetchCategories } = require('../actions');
const { NAME_CATEGORY } = require('../models/sections');
const { categoriesSelector } = require('../../common/selectors/categories');

const { func } = React.PropTypes;

class NameCategorySection extends React.Component {
  static propTypes = {
    onClickNext: func
  };

  componentWillMount() {
    this.props.onMount();
  }

  render() {
    const { onClickNext, categories } = this.props;

    return (
      <Section section={NAME_CATEGORY} actionLabel="Weiter" onClickAction={onClickNext}>
        <Form.ControlGroup labelFor="name" labelScope="activerecord.attributes.poi.name">
          <Form.Controls>
            <Form.Input name="name"/>
          </Form.Controls>
        </Form.ControlGroup>
        <Form.ControlGroup labelFor="node_type_id" labelScope="activerecord.attributes.poi.type">
          <Form.Controls>
            <Form.Select name="node_type_id" options={[]}/>
          </Form.Controls>
        </Form.ControlGroup>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: categoriesSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: section => dispatch(tryFetchCategories()),
    onClickNext: section => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameCategorySection);