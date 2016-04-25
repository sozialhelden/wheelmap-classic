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

const similarNodes = createSelector(
  widget,
  widget => widget.get('similarNodes')
);

const errors = createSelector(
  widget,
  widget => widget.get('errors')
);

const loading = createSelector(
  widget,
  widget => widget.get('loading')
);

module.exports = {
  widget,
  activeSection,
  sections,
  node,
  mapCenter,
  mapZoom,
  similarNodes,
  errors,
  loading
};