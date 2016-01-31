(function($, exports){
   'use strict';

    function startsWith(item, term){
        return item.toLowerCase().indexOf(term.toLowerCase()) === 0;
    }

    function UserSearch(options) {
        this.users = options.users || [];
        this.template = $(options.template).html();

        this.getTerm = function() {
        return $(options.input).val();
        };

        this.getFilteredUsers = function() {
            return $.grep(this.users,
                this.compare.bind(this, this.getTerm()));
        };

        this.compare = function(term, user) {
            if(term.length < 1) {
                return true;
            }

            if(user.name && startsWith(user.name, term)) {
                return true;
            }

            if(user.email && startsWith(user.email, term)) {
                return true;
            }

            return false;
        };

        this.render = function() {
            $(options.display).html(Mustache.render(this.template, {
                items: this.getFilteredUsers(),
                total: this.users.length,
                term: this.getTerm()
            }));
        };

        this.listen = function() {
            $(options.trigger).click(this.render.bind(this));
            this.render();
        };
    }

    exports.UserSearch = UserSearch;
    exports.startsWith = startsWith;

})(window.$, window);
