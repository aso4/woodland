import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders', { path: '/orders' }); // new endpoint at /orders
  // can also remove everything in curly braces and still the same
  // this.route('index', { path: '/' }); - this is defaulted
});

export default Router;
