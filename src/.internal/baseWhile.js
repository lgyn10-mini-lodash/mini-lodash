import slice from '../slice.js';

/**
 * The base implementation of methods like `dropWhile` and `takeWhile`.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 */

function baseWhile(array, predicate) {
  const { length } = array;
  let index = -1;

  while (++index < length && predicate(array[index], index, array)) {}

  return slice(array, 0, index);
}

export default baseWhile;
