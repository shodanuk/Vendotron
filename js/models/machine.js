define([
  'jquery', 
  'underscore', 
  'backbone'
], function($, _, Backbone){
  
  var Machine = Backbone.Model.extend({
    defaults: {
      name: 'Machine Name'
    },
    initialize: function(){
      this.bind("change:name", function(){
        var name = this.get("name"); 
        console.log('Machine Name updated to ' + name);
      });
    }
  });
  return Machine;
});