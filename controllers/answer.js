Pyr.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var myAnswer = this.get('model');
      myAnswer.save();
      var myQuestions = this.get('controllers.question.model');
      var myQuestion = myAnswer.get('Question');
      this.transitionToRoute('question', myQuestion.get('id'));
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var myAnswer = this.get('model');
        var myQuestions = this.get('controllers.question.model');
        var myQuestion = myAnswer.get('Question');
        myQuestion.get('answers').removeObject(myAnswer);
        myQuestions.save();
        myAnswer.destroyRecord();
        // this.get('model').destroyRecord();
        this.transitionToRoute('question', myQuestion.get('id'));
      }
    }
  }
});
