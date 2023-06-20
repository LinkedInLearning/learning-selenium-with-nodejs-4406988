import EmberRouter from '@ember/routing/router';
import config from 'bread-shop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('order', function () {
    this.route('sandwich');
  });
});
