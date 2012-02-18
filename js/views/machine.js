define([
  'jquery',
  'underscore', 
  'backbone',
  'collections/machines',
  'text!templates/machine.html'
], function($, _, Backbone, Machines, machineTemplate){

  var MachineView = Backbone.View.extend({
    
    tagName: 'a',
    template: _.template(machineTemplate),
    
    events: {},
    
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.view = this;
    },
    
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
    },
    
  });
  return MachineView;
});    