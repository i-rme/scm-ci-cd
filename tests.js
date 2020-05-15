test("Valid plates various", function (assert) {
    assert.equal(isValidPlate('0000BBB'), true, "Lowest plate");
    assert.equal(isValidPlate('4942FTH'), true, "Random Plate");
    assert.equal(isValidPlate('9999ZZZ'), true, "Highest plate");
    assert.equal(isValidPlate('0000bbb'), true, "Lower case plate");
    assert.equal(isValidPlate('0000BBb'), true, "Mixed case plate");
});

test("Valid plates numbers", function (assert) {
    assert.equal(isValidPlate('1111BBB'), true, "Plate with number 1");
    assert.equal(isValidPlate('2222BBB'), true, "Plate with number 2");
    assert.equal(isValidPlate('3333BBB'), true, "Plate with number 3");
    assert.equal(isValidPlate('4444BBB'), false, "Plate with number 4");
    assert.equal(isValidPlate('5555BBB'), true, "Plate with number 5");
    assert.equal(isValidPlate('6666BBB'), true, "Plate with number 6");
    assert.equal(isValidPlate('7777BBB'), true, "Plate with number 7");
    assert.equal(isValidPlate('8888BBB'), true, "Plate with number 8");
    assert.equal(isValidPlate('9999BBB'), true, "Plate with number 9");
});

test("Valid plates letters", function (assert) {
    assert.equal(isValidPlate('0000BBB'), true, "Plate with letter B");
    assert.equal(isValidPlate('0000CCC'), true, "Plate with letter C");
    assert.equal(isValidPlate('0000DDD'), true, "Plate with letter D");
    assert.equal(isValidPlate('0000FFF'), true, "Plate with letter F");
    assert.equal(isValidPlate('0000GGG'), true, "Plate with letter G");
    assert.equal(isValidPlate('0000HHH'), true, "Plate with letter H");
    assert.equal(isValidPlate('0000JJJ'), true, "Plate with letter J");
    assert.equal(isValidPlate('0000KKK'), true, "Plate with letter K");
    assert.equal(isValidPlate('0000LLL'), true, "Plate with letter L");
    assert.equal(isValidPlate('0000MMM'), true, "Plate with letter M");
    assert.equal(isValidPlate('0000NNN'), true, "Plate with letter N");
    assert.equal(isValidPlate('0000PPP'), true, "Plate with letter P");
    assert.equal(isValidPlate('0000RRR'), true, "Plate with letter R");
    assert.equal(isValidPlate('0000SSS'), true, "Plate with letter S");
    assert.equal(isValidPlate('0000TTT'), true, "Plate with letter T");
    assert.equal(isValidPlate('0000VVV'), true, "Plate with letter V");
    assert.equal(isValidPlate('0000WWW'), true, "Plate with letter W");
    assert.equal(isValidPlate('0000XXX'), true, "Plate with letter X");
    assert.equal(isValidPlate('0000YYY'), true, "Plate with letter Y");
    assert.equal(isValidPlate('0000ZZZ'), true, "Plate with letter Z");
});

test("Invalid plates various", function (assert) {
    assert.equal(isValidPlate(''), false, "No plate");
    assert.equal(isValidPlate('🚘🚘🚘🚘🚘🚘🚘'), false, "Emoji plate");
    assert.equal(isValidPlate('       '), false, "Spaces plate");
    assert.equal(isValidPlate(' 000BBB'), false, "Missing first character plate");
    assert.equal(isValidPlate('0000BB '), false, "Missing ending character plate");
    assert.equal(isValidPlate('BBB0000'), false, "Reversed plate 1");
    assert.equal(isValidPlate('BBBB000'), false, "Reversed plate 2");
    assert.equal(isValidPlate('0000000'), false, "Zeroed plate");
    assert.equal(isValidPlate('BBBBBBB'), false, "Lettered plate");
    assert.equal(isValidPlate('-100BBB'), false, "Negative plate");
    assert.equal(isValidPlate('１000BBB'), false, "Non latin digit (https://bugzilla.mozilla.org/show_bug.cgi?id=378738)");
    assert.equal(isValidPlate('0000𝗕BB'), false, "Non latin letter");
});

test("Invalid, non allowed letters on first position", function (assert) {
    assert.equal(isValidPlate('0000ABB'), false, "Letter A on first position");
    assert.equal(isValidPlate('0000EBB'), false, "Letter E on first position");
    assert.equal(isValidPlate('0000IBB'), false, "Letter I on first position");
    assert.equal(isValidPlate('0000ÑBB'), false, "Letter Ñ on first position");
    assert.equal(isValidPlate('0000OBB'), false, "Letter O on first position");
    assert.equal(isValidPlate('0000QBB'), false, "Letter Q on first position");
    assert.equal(isValidPlate('0000UBB'), false, "Letter U on first position");
});

test("Invalid, non allowed letters on second position", function (assert) {
    assert.equal(isValidPlate('0000BAB'), false, "Letter A on second position");
    assert.equal(isValidPlate('0000BEB'), false, "Letter E on second position");
    assert.equal(isValidPlate('0000BIB'), false, "Letter I on second position");
    assert.equal(isValidPlate('0000BÑB'), false, "Letter Ñ on second position");
    assert.equal(isValidPlate('0000BOB'), false, "Letter O on second position");
    assert.equal(isValidPlate('0000BQB'), false, "Letter Q on second position");
    assert.equal(isValidPlate('0000BUB'), false, "Letter U on second position");
});

test("Invalid, non allowed letters on third position", function (assert) {
    assert.equal(isValidPlate('0000BBA'), false, "Letter A on third position");
    assert.equal(isValidPlate('0000BBE'), false, "Letter E on third position");
    assert.equal(isValidPlate('0000BBI'), false, "Letter I on third position");
    assert.equal(isValidPlate('0000BBÑ'), false, "Letter Ñ on third position");
    assert.equal(isValidPlate('0000BBO'), false, "Letter O on third position");
    assert.equal(isValidPlate('0000BBQ'), false, "Letter Q on third position");
    assert.equal(isValidPlate('0000BBU'), false, "Letter U on third position");
});
