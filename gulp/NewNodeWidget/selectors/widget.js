const { createSelector } = require('reselect');

const widgetSelector = state => state.widget;

const activeSectionSelector = createSelector(
  widgetSelector,
  widget => widget.get('activeSection')
);

const sectionsSelector = createSelector(
  widgetSelector,
  widget => widget.get('sections')
);

module.exports = {
  widgetSelector,
  activeSectionSelector,
  sectionsSelector
};