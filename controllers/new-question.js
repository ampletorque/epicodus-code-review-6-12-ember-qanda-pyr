Pyr.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        question: this.get('question'),
        body: this.get('body')
      });
      newQuestion.save();
      this.set('author', null);
      this.set('question', null);
      this.set('body', null);
      this.transitionToRoute('question', newQuestion.get('id'));
    }
  }
});
