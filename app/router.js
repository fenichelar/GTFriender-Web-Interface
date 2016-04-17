import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {
    path: '/'
  });
  this.route('categories', function() {
    this.route('category', {
      path: ':category_id'
    }, function() {
      this.route('activities', function() {
        this.route('activity', {
          path: ':activity_id'
        }, function() {
          this.route('events', function() {
            this.route('add');
            this.route('event', {
              path: ':event_id'
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
