import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hymnee', function() {
    this.route('policy');
  });
});

export default Router;
