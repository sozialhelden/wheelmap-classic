import { createSelector } from 'reselect';

export const widget = state => state.widget;

export const activeSection = createSelector(
  widget,
  widget => widget.get('activeSection')
);

export const sections = createSelector(
  widget,
  widget => widget.get('sections')
);

export const node = createSelector(
  widget,
  widget => widget.get('node')
);

export const mapCenter = createSelector(
  widget,
  widget => widget.get('mapCenter').toJS()
);

export const mapZoom = createSelector(
  widget,
  widget => widget.get('mapZoom')
);

export const similarNodes = createSelector(
  widget,
  widget => widget.get('similarNodes')
);

export const errors = createSelector(
  widget,
  widget => widget.get('errors')
);

export const loading = createSelector(
  widget,
  widget => widget.get('loading')
);
