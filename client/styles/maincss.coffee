@theme =
  primary: '#474645'
  bg2: '#B5AFAB'
  bg1: '#cdcec7'
  bgRed: '#ff0000'
  highligh: '#208ad2'

css = new CSSC

# Fonts
css.add '@font-face',
  fontFamily: 'lane'
  src: "url('Lane/LANENAR_.ttf')"
  fontWeight: 'normal'
  fontStyle: 'normal'

css.add '@font-face',
  fontFamily: 'sourceSansPro'
  src: "url('source-sans-pro/SourceSansPro-Regular.otf')"
  fontWeight: 'normal'
  fontStyle: 'normal'

css.add '@font-face',
  fontFamily: 'sourceSansProBold'
  src: "url('source-sans-pro/SourceSansPro-Bold.otf')"
  fontWeight: 'normal'
  fontStyle: 'normal'

css.add '@font-face',
  fontFamily: 'sourceCode'
  src: "url('source-code-pro/SourceCodePro-Regular.otf')"
  fontWeight: 'normal'
  fontStyle: 'normal'

# Slide counter
css.add '.slide-cpt',
  border: "#{CSSC.x 3} solid #{@theme.primary}"
  borderRadius: CSSC.x 30
  backgroundColor: CSSC.white
  color: @theme.primary
  textAlign: 'center'
  width: CSSC.p 100
  height: CSSC.p 100
  lineHeight: CSSC.x 22
  fontSize: CSSC.x 14
  margin: 0
  padding: 0
  boxSizing: 'border-box'
  fontFamily: 'sourceSansProBold'

# Gravatar
css.add '.gravatar',
  borderRadius: CSSC.p 5
  border: "3px solid #{@theme.primary}"
  width: CSSC.p 5

css.add '.gravatar_small',
  borderRadius: CSSC.p 10
  border: "1px solid #{@theme.primary}"
  width: CSSC.p 50

css.add '.gravatar_mentions',
  borderRadius: CSSC.p 5
  border: "1px solid #{@theme.primary}"
  width: CSSC.p 45

css.add '.gravatar_mentors',
  borderRadius: CSSC.p 5
  border: "1px solid #{@theme.primary}"
  width: CSSC.p 25

# Background and generic values
css.add 'html',
  backgroundImage: "radial-gradient(ellipse at center, \
    #{@theme.bg1} 0%, #{@theme.bg2} 100%)"
  color: @theme.primary
  textAlign: 'center'
  #font: "24px sourceSansPro"


css.add '.bgRed',
  backgroundColor: @theme.bgRed

css.add '.bgLightGray',
  "background-color": @theme.bg1

css.add '.bgDarkGray',
  "background-color": @theme.bg2

# atForm window
css.add '.atDisplay',
  fontSize: '.8em'
  padding: "5px"
  borderRadius: CSSC.p 2
  border: "1px solid #{@theme.primary}"

# Titles
css.add 'h1',
  fontSize: '2em'
  fontFamily: 'lane'

css.add 'h2',
  fontSize: '1.6em'
  fontFamily: 'lane'

# Texts
css.add '.ui.segment h1.header',
  fontSize: '2.0em'

css.add '.ui.segment .content',
  fontSize: '1.2em'

css.add 'p',
  fontSize: '1.0em'

css.add '.left',
  textAlign: 'left'

css.add 'a',
  color: @theme.highligh
  textDecoration: 'none'
  fontFamily: 'sourceSansProBold'

css.add 'li',
  textAlign: 'left'

css.add 'a:hover',
  textDecoration: 'underline'

css.add 'code',
  fontFamily: 'sourceCode'
  fontSize: '.6em'

# Codes
css.add 'pre[class*="language-"]',
  fontFamily: 'sourceCode'
  fontSize: '1.1em'
  lineHeight: '.6em'

css.add 'pre[class*="language-"].big',
  fontFamily: 'sourceCode'
  fontSize: '1.1em'
  lineHeight: '.6em'
  maxHeight: CSSC.p 100
  minHeight: CSSC.p 100

css.add 'prism.big',

# Miscellaneous
css.add '.segment.atOpt',
  margin: 0
  padding: 0

css.add '.segment.atOpt',
  margin: 0
  padding: 0

css.add '.segment.atOpt .field',
  marginBottom: '3px'

css.add '.segment.atOpt label',
  minWidth: '100px'
  color: "rgba(0, 0, 0, 0.7)!important"

css.add '.grid.options label',
  minWidth: '130px'

css.add '.segment.atState .button',
  fontSize: '.6em'
  minWidth: '200px'

css.add '.ui.red.header',
  fontSize: '2.6em'

css.add 'h1.section',
  fontSize: '3.6em'

css.add '.ui.segment.atOptions .column',
  marginBottom: 0

#css.add '.ui.segment.atOptions',
#  backgroundColor: @theme.bg2
