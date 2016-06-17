import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import Section from './models/Section';
import actions from './actions';
import selectors from './selectors';
import { immutableListOf } from '../common/propTypes/immutable';

const { func, instanceOf, any } = React.PropTypes;

function Widget({ sections, activeSection, onNavigate, children }) {
  return (
    <div className="nodes-new">
      <Header />
      <Breadcrumbs sections={sections} activeSection={activeSection} onNavigate={onNavigate} />
      {children}
    </div>
  );
}

Widget.propTypes = {
  sections: immutableListOf(instanceOf(Section)).isRequired,
  activeSection: instanceOf(Section).isRequired,
  onNavigate: func.isRequired,
  children: any
};

function mapStateToProps(state) {
  return {
    sections: selectors.sections(state),
    activeSection: selectors.activeSection(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNavigate: (section) => dispatch(actions.navigateToSection(section))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
