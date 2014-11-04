Template.layout.helpers({
  getTransition: function() {
    return Session.get('currentTransition') || 'slideWindow';
  },
  slideCpt: function() {
    return Session.get('slideCpt') || '??/??';
  }
});

Template.layout.rendered = function() {
  return Session.set('currentTransition', 'slideWindow');
};