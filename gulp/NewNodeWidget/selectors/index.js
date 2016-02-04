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

const fetchedCategoriesSelector = createSelector(
  widgetSelector,
  widget => widget.get('fetchedCategories')
);

const nodeSelector = createSelector(
  widgetSelector,
  widget => widget.get('node')
);

const mapCenterSelector = createSelector(
  widgetSelector,
  widget => widget.get('mapCenter')
);

const mapZoomSelector = createSelector(
  widgetSelector,
  widget => widget.get('mapZoom')
);

const markerMovedSelector = createSelector(
  widgetSelector,
  widget => widget.get('markerMoved')
);

module.exports = {
  widgetSelector,
  activeSectionSelector,
  sectionsSelector,
  fetchedCategoriesSelector,
  nodeSelector,
  mapCenterSelector,
  mapZoomSelector,
  markerMovedSelector
};