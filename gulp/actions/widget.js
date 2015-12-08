export const CHANGE_WIDTH = 'CHANGE_WIDTH';
export const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGE_PROVIDER = 'CHANGE_PROVIDER';
export const CHANGE_CATEGORIES = 'CHANGE_CATEGORIES';

export function changeWidth(width) {
  return { type: CHANGE_WIDTH, width };
}

export function changeHeight(height) {
  return { type: CHANGE_HEIGHT, height };
}

export function changeLocation(location) {
  return { type: CHANGE_LOCATION, location };
}

export function changeProvider(providerId) {
  return { type: CHANGE_PROVIDER, providerId };
}

export function changeCategories(categories) {
  return { type: CHANGE_CATEGORIES, categories };
}