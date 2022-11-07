import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer'

test('converts value to string', () => {
  const result = new ArrayBufferConverter();
  result.load(getBuffer());
  expect(result.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});