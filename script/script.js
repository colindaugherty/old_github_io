function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

var COLINSITE = (function() {

    function main() {
        var currentYear;

        currentYear = new Date().getFullYear();
        $('#year').text(currentYear);
        console.log(currentYear);
    }

    function init() {
        main()
      }

    return {
        init : init,
      };

})();

ready(COLINSITE.init);