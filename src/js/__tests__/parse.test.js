import parse from '../parse';

test('should return obj', () => {
  const data = '[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994}]';
  expect(parse(data)).toEqual([{
    id: 26,
    imdb: 9.3,
    title: 'Побег из Шоушенка',
    year: 1994,
  }]);
});
