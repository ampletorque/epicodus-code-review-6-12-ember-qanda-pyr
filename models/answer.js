Pyr.Answer = DS.Model.extend({
  text: DS.attr(),
  Question: DS.belongsTo('question', {async: true})
});
