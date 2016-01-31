/*global UserSearch */
(function() {
  'use strict';

  describe('UserSearch', function() {

      describe('Given 5 users', function() {
          var users = [
              { name: 'Jonathan Knight', email: 'nahtanoj@nkotb.com'},
              { name: 'Jordan Knight', email: 'nadroj@nkotb.com'},
              { name: 'Joey McIntyer', email: 'yeoj@nkotb.com'},
              { name: 'Donnie Wahlberg', email: 'einnod@nkotb.com'},
              { name: 'Danny Wood', email: 'ynnad@nkotb.com'}
          ];

        describe('When searching users', function() {

            beforeEach(function() {
                var ui = [
                    '<input id="input" type="text"/>',
                    '<button id="button" />',
                    '<div id="display" />',
                    '<script id="tmpl" type="x-tmpl-mustache">',
                    '<ul>{{#items}}<li>{{name}} {{email}}</li>{{/items}}</ul>',
                    '<span>{{items.length}} {{total}} {{term}}</span>',
                    '</script>'
                    ].join('');
                $('#ui').html(ui);
                new UserSearch({
                    users: users,
                    template: '#tmpl',
                    input: '#input',
                    trigger: '#button',
                    display: '#display'
                })
                .listen();
            });

            describe('on construction', function() {
                it('should display the entire list', function() {
                    expect($('#ui li').length).to.equal(users.length);
                });
            });

            describe('when searching by first name', function() {
                beforeEach(function() {
                    $('#input').val(users[0].name.split(' ')[0]);
                    $('#button').trigger('click');
                });

                it('should display one user', function() {
                   expect($('#ui li').length).to.equal(1);
                });

                it('should be the correct user', function() {
                   expect($('#ui li').text()).to.contain(users[0].name);
                });

                it('should display the count of displayed users', function() {
                   expect($('span').text()).to.contain(1);
                });

                it('should display the count of total users', function() {
                   expect($('span').text()).to.contain(users.length);
                });

                it('should display the search term', function() {
                   expect($('span').text()).to.contain($('#input').val());
                });
            });

            describe('when searching by first inital', function() {
                beforeEach(function() {
                    $('#input').val(users[0].name[0]);
                    $('#button').trigger('click');
                });

                it('should display matched users', function() {
                   expect($('#ui li').length).to.equal(3);
                });

                it('should be the correct users', function() {
                   expect($('#ui li').text()).to.contain(users[0].name);
                   expect($('#ui li').text()).to.contain(users[1].name);
                   expect($('#ui li').text()).to.contain(users[2].name);
                });

                it('should display the count of displayed users', function() {
                   expect($('span').text()).to.contain(3);
                });

                it('should display the count of total users', function() {
                   expect($('span').text()).to.contain(users.length);
                });

                it('should display the search term', function() {
                   expect($('span').text()).to.contain($('#input').val());
                });
            });

            describe('when searching by first inital lowercase', function() {
                beforeEach(function() {
                    $('#input').val(users[0].name[0].toLowerCase());
                    $('#button').trigger('click');
                });

                it('should display matched users', function() {
                   expect($('#ui li').length).to.equal(3);
                });

                it('should be the correct users', function() {
                   expect($('#ui li').text()).to.contain(users[0].name);
                   expect($('#ui li').text()).to.contain(users[1].name);
                   expect($('#ui li').text()).to.contain(users[2].name);
                });

                it('should display the count of displayed users', function() {
                   expect($('span').text()).to.contain(3);
                });

                it('should display the count of total users', function() {
                   expect($('span').text()).to.contain(users.length);
                });

                it('should display the search term', function() {
                   expect($('span').text()).to.contain($('#input').val());
                });
            });

            describe('when searching by email', function() {
                beforeEach(function() {
                    $('#input').val(users[0].email.split('@')[0]);
                    $('#button').trigger('click');
                });

                it('should display one user', function() {
                   expect($('#ui li').length).to.equal(1);
                });

                it('should be the correct user', function() {
                   expect($('#ui li').text()).to.contain(users[0].name);
                });

                it('should display the count of displayed users', function() {
                   expect($('span').text()).to.contain(1);
                });

                it('should display the count of total users', function() {
                   expect($('span').text()).to.contain(users.length);
                });

                it('should display the search term', function() {
                   expect($('span').text()).to.contain($('#input').val());
                });
            });
        });
      });
  });
})();
