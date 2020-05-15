/*
 * Given the a license plate it validates it.
 */
function isValidPlate(plate) {
  var re = /(\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ])/i;
  if(plate.match(re) != null) {
    return true;
  } else {
    return false;
  }
}