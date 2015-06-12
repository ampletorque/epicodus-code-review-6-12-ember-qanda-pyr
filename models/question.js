Pyr.Question = DS.Model.extend({
  question: DS.attr(),
  body: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
