const { createSelector } = require('reselect');

const widget = state => state.widget;

const activeSection = createSelector(
  widget,
  widget => widget.get('activeSection')
);

const sections = createSelector(
  widget,
  widget => widget.get('sections')
);

const fetchedCategories = createSelector(
  widget,
  widget => widget.get('fetchedCategories')
);

const node = createSelector(
  widget,
  widget => widget.get('node')
);

const mapCenter = createSelector(
  widget,
  widget => widget.get('mapCenter')
);

const mapZoom = createSelector(
  widget,
  widget => widget.get('mapZoom')
);

const markerMoved = createSelector(
  widget,
  widget => widget.get('markerMoved')
);

const addressChanged = createSelector(
  widget,
  widget => widget.get('addressChanged')
);

const similarNodes = createSelector(
  widget,
  widget => widget.get('similarNodes')
);

const errors = createSelector(
  widget,
  widget => widget.get('errors')
);

module.exports = {
  widget,
  activeSection,
  sections,
  fetchedCategories,
  node,
  mapCenter,
  mapZoom,
  markerMoved,
  addressChanged,
  similarNodes,
  errors
};