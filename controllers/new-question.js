Pyr.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        body: this.get('body')
      });
      newQuestion.save();
      this.set('question', null);
      this.set('body', null);
      this.transitionToRoute('questions');
    }
  }
});
