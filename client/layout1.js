Template.layout1.helpers({
  getTransition: function() {
    return Session.get('currentTransition') || 'slideWindow';
  },
  slideCpt: function() {
    return Session.get('slideCpt') || '??/??';
  }
});

Template.layout1.rendered = function() {
  return Session.set('currentTransition', 'slideWindow');
};