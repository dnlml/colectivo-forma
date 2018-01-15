/**
 * Normalize a value between a range of values
 */

module.exports = (x, istart, istop, ostart, ostop) => {
  return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
};
