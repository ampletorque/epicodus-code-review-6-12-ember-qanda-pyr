Pyr.QuestionsController = Ember.ArrayController.extend({
  // sortProperties: ['title'],    //defaults posts to be sorted by title
  actions: {
    sortByQuestion: function() {
      this.set('sortProperties', ['question']);
    },
    sortByAuthor: function() {
      this.set('sortProperties', ['author']);
    }
  }
});
