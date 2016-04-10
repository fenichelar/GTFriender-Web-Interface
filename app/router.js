import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories', function() {
    this.route('category', {
      path: ':category'
    }, function() {
      this.route('activities', function() {
        this.route('activity', {
          path: ':activity'
        }, function() {
          this.route('events', function() {
            this.route('event', {
              path: ':event'
            }, function() {
              this.route('edit');
            });
          });
        });
      });
    });
  });
  this.route('user');
});

export default Router;
