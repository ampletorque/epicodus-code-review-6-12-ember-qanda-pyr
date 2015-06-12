Pyr.NewAnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('answerText')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();
      this.set('answerText', null);
      this.transitionToRoute('question', question.id);
    }
  }
});
