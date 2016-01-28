(function () {
  'use strict';

  describe('Given the test environment', function () {
      it('should include jquery', function () {
            expect(window.$).to.not.equal(undefined);
      });
      
      it('should include mustache', function () {
            expect(window.Mustache).to.not.equal(undefined);
      });
  });
})();