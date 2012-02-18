require.config({
  paths: {
    'jquery': 'libs/jquery/jquery-1.7.1.min',
    'underscore': 'libs/underscore/underscore-min',
    'backbone': 'libs/backbone/backbone-min',
    'text': 'libs/require/text'
  }
});

require(['views/app'], function(AppView){
  var app_view = new AppView;
});