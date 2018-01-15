/**
 * Linear interpolation
 */

module.exports = (a,b,n) => {
  return (1 - n) * a + n * b;
};
