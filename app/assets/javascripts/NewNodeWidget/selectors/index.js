import { createSelector } from 'reselect';

export const widget = state => state.widget;

export const activeSection = state => state.widget.get('activeSection');

export const sections = state => state.widget.get('sections');

export const node = state => state.widget.get('node');

export const mapCenter = createSelector(
  widget,
  widget => widget.get('mapCenter').toJS()
);

export const mapZoom = state => state.widget.get('mapZoom');

export const similarNodes = state => state.widget.get('similarNodes');

export const errors = state => state.widget.get('errors');

export const loading = state => state.widget.get('loading');
