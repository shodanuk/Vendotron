define([
  'underscore', 
  'backbone',
  'models/machine'
], function(_, Backbone, Machine){
  
  var MachineCollection = Backbone.Collection.extend({
    
    model: Machine,
    
    
  });
  return new MachineCollection
});