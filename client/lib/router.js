var SLIDES = [
  {layt: 'layout',  tpl: 'title',   section: 1, path: '/'},
  {layt: 'layout',  tpl: 'slide01', section: 1, path: '/slide01'},
  {layt: 'layout',  tpl: 'slide02', section: 1, path: '/slide02'},
  {layt: 'layout',  tpl: 'slide03', section: 1, path: '/slide03'},
  {layt: 'layout',  tpl: 'slide04', section: 1, path: '/slide04'},
  {layt: 'layout',  tpl: 'slide05', section: 1, path: '/slide05'},
  {layt: 'layout',  tpl: 'slide06', section: 1, path: '/slide06'},
  {layt: 'layout',  tpl: 'slide07', section: 1, path: '/slide07'},
  {layt: 'layout',  tpl: 'slide08', section: 1, path: '/slide08'},
  {layt: 'layout',  tpl: 'slide09', section: 1, path: '/slide09'},
  {layt: 'layout',  tpl: 'slide10', section: 1, path: '/slide10'},
  {layt: 'layout',  tpl: 'slide11', section: 1, path: '/slide11'},
  {layt: 'layout',  tpl: 'slide12', section: 1, path: '/slide12'},
  {layt: 'layout',  tpl: 'slide13', section: 1, path: '/slide13'},
  {layt: 'layout',  tpl: 'end',     section: 1, path: '/end'},
];

_.each(SLIDES, function(slide){
  Router.route(slide.path, function() {
    this.layout(slide.lyt);
    this.render(slide.tpl);
  });
});

Logger.setLevel('famous-views', 'error');

Meteor.startup(function() {
  return famous.core.Engine.on('keydown', function(keyEvt) {
    switch (keyEvt.which) {
      case 39:
      case 32:
        return Router.setNext();
      case 37:
        return Router.setPrev();
    }
  });
});

Router.onBeforeAction(function() {
  if (Router.history === undefined) {
    var path = Router.current().url;
    Router.history = _.indexOf(SLIDES, _.find(SLIDES, function(slide) {
      return slide.path === path;
    }));
    console.log('Current url', Router.current().url);
    console.log('Current path', path);
    console.log('Router.history', Router.history);
  }
  return this.next();
});

Router.setNext = function() {
  var transition = Session.get('currentTransition');
  if (transition === 'slideWindowRight' || transition === void 0)
    Session.set('currentTransition', 'slideWindow');

  Router.history++;
  if (Router.history === SLIDES.length)
    Router.history = 0;

  return Router.go(SLIDES[Router.history].path);
};

Router.setPrev = function() {
  var transition;
  transition = Session.get('currentTransition');
  if (transition === 'slideWindow' || transition === void 0)
    Session.set('currentTransition', 'slideWindowRight');

  Router.history--;
  if (Router.history === -1)
    Router.history = SLIDES.length - 1;

  return Router.go(SLIDES[Router.history].path);
};

Router.setCounter = function() {
  var cpt = FView.byId('slideCpt');
  if (cpt !== undefined) {
    cpt.modifier.setTransform(famous.core.Transform.rotateY(Math.PI), {
      duration: 300
    });
    return famous.utilities.Timer.setTimeout(function() {
      Session.set('slideCpt', "" + (Router.history + 1) + "/" + SLIDES.length);
      return cpt.modifier.setTransform(famous.core.Transform.rotateY(0), {
        duration: 300
      });
    }, 300);
  }
};

Router.onAfterAction(function() {
  return Router.setCounter();
});