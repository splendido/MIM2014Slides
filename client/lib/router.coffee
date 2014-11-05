@SLIDES = [
  {layt: 'layout',  tpl: 'title',    section: 1, path: '/'},
  {layt: 'layout',  tpl: 'at1',  section: 1, path: '/at1'},
  {layt: 'layout',  tpl: 'at2',  section: 1, path: '/at2'},
  {layt: 'layout',  tpl: 'at3',  section: 1, path: '/at3'},
  {layt: 'layout',  tpl: 'templates',  section: 2, path: '/templates'},
  {layt: 'layout',  tpl: 'appearance',  section: 2, path: '/appearance'},
  {layt: 'layout',  tpl: 'behaviour',  section: 2, path: '/behaviour'},
  {layt: 'layout',  tpl: 'texts',  section: 2, path: '/texts'},
  {layt: 'layout',  tpl: 'contribs', section: 3, path: '/contribs'},
  {layt: 'layout',  tpl: 'end',      section: 1, path: '/end'},
]

Router.configure layoutTemplate: 'layout'
Router.route SLIDES[0].path, -> @render SLIDES[0].tpl

`
_.each(_.rest(SLIDES), function(slide){
  Router.route(slide.path, function() {
      this.layout(slide.layt);
      this.render(slide.tpl);
  });
});
`

if Meteor.isClient
  # Remove debug logging in Famous-Views
  Logger.setLevel 'famous-views', 'error'

  Meteor.startup ->
    # Events handling for going from one slide to the other.
    famous.core.Engine.on 'keydown', (keyEvt) ->
      switch keyEvt.which
        # SPACE and →: Go next slide
        #when 39, 32 then Router.setNext()
        # →: Go next slide
        when 39 then Router.setNext()
        # →: Go previou slide
        when 37 then Router.setPrev()
    #famous.core.Engine.on CLICK_EVT, -> Router.setNext()

  Router.onBeforeAction ->
    # Get the first index in the slidedeck when loading the app.
    unless Router.history?
      path = Router.current().url
      Router.history = _.indexOf SLIDES, _.find SLIDES, (slide) ->
        slide.path is path
      console.log 'Current url', Router.current().url
      console.log 'Current path', path
      console.log 'Router.history', Router.history
    @next()

  Router.setNext = ->
    transition = Session.get 'currentTransition'
    if transition is 'slideWindowRight' or transition is undefined
      Session.set 'currentTransition', 'slideWindow'
    Router.history++
    Router.history = 0 if Router.history is SLIDES.length
    Router.go SLIDES[Router.history].path

  Router.setPrev = ->
    transition = Session.get 'currentTransition'
    if transition is 'slideWindow' or transition is undefined
      Session.set 'currentTransition', 'slideWindowRight'
    Router.history--
    Router.history = SLIDES.length - 1 if Router.history is -1
    Router.go SLIDES[Router.history].path

  Router.setCounter = ->
    window.cpt = FView.byId 'slideCpt'
    unless cpt is undefined
      cpt.modifier.setTransform (famous.core.Transform.rotateY Math.PI),
        duration: 300
      famous.utilities.Timer.setTimeout ->
        Session.set 'slideCpt', "#{Router.history + 1}/#{SLIDES.length}"
        cpt.modifier.setTransform (famous.core.Transform.rotateY 0),
          duration: 300
      , 300

  Router.onAfterAction ->
    Router.setCounter()
