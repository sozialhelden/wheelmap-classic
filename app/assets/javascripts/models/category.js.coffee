attr = DS.attr

Wheelmap.Category = DS.Model.extend
  identifier: attr()

Wheelmap.CategoryAdapter = DS.FixtureAdapter.extend()

Wheelmap.Category.FIXTURES = [
 {
   id: 1,
   identifier: 'money_post'
 },
 {
   id: 2,
   identifier: 'tourism'
 },
 {
   id: 3,
   identifier: 'health'
 },
 {
   id: 4,
   identifier: 'leisure'
 },
 {
   id: 5,
   identifier: 'public_transfer'
 },
 {
   id: 6,
   identifier: 'food'
 },
 {
   id: 7,
   identifier: 'education'
 },
 {
   id: 8,
   identifier: 'shopping'
 },
 {
   id: 9,
   identifier: 'accommodation'
 },
];