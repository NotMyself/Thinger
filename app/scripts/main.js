/*global UserSearch */
(function($){
    'use strict';
    $(function(){
        $(document)
            .ajaxStart(function() { $('#loading').show(); })
            .ajaxStop(function() { $('#loading').hide(); });

        $.getJSON('http://jsonplaceholder.typicode.com/users')
            .done(function(users) {
                new UserSearch({
                    users: users,
                    template: '#user-results-tmpl',
                    input: '#term',
                    trigger: '#trigger',
                    display: '#display'
                })
                .listen();
            })
            .fail(function() {
                $('#display').html($('#error-tmpl').html());
            });
    });
})(window.$);
