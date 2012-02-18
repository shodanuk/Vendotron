define([
  'jquery',
  'underscore', 
  'backbone',
  'views/machine',
  'collections/machines'
], function($, _, Backbone, Machine, Machines){

  var AppView = Backbone.View.extend({
    
    el: $('#content'),
    
    events: {},
    
    initialize: function() {
      Machines.add([
        {name: 'Drink Machine'},
        {name: 'Snack and Drink Machine'}
      ]);
      
      this.addAll();
    },
    
    render: function() {
      $('#sites').html(this.machinesTemplate());
    },
    
    addOne: function(machine) {
      var view = new Machine({model: machine});
      this.$("#sites").append(view.render().el);
    },
    
    addAll: function() {
      Machines.each(this.addOne);
    }
    
  });
  return AppView;
});