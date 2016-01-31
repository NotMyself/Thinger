/*global startsWith */
(function() {
  'use strict';

  describe('Given string comparison utilities', function () {
      describe('When checking if one string starts with another string', function() {
         it('should return true for a match', function(){
            expect(startsWith('string', 's')).to.equal(true);
         });

         it('should return false for no match', function(){
            expect(startsWith('string', 'x')).to.equal(false);
         });

         it('should ignore the case of the first parameter', function() {
            expect(startsWith('STRING', 's')).to.equal(true);
         });

         it('should ignore the case of the second parameter', function() {
            expect(startsWith('string', 'S')).to.equal(true);
         });
      });
  });
})();
