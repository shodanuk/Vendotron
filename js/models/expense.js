define([
  'jquery', 
  'underscore', 
  'backbone'
], function($, _, Backbone){
  
  var Expense = Backbone.Model.extend({
    defaults: {
      description: 'Enter a description…',
      amount: 0,
      date: new Date()
    },
    initialize: function(){
      
    }
  });
  return Expense;
});