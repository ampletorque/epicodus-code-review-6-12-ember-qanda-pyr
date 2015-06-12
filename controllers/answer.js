Pyr.AnswerController = Ember.ObjectController.extend({
  needs: 'question',
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var myAnswer = this.get('model');
      myAnswer.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        // var myQuestion = this.get('controllers.question.model');
        var myAnswer = this.get('model');
          // console.log(myAnswer);
        var myQuestion = myAnswer.get('Question');
          // console.log(myQuestion);
        myQuestion.get('answers').removeObject(myAnswer);
          console.log(myQuestion.get('answers'));
        myQuestion.save();
        myAnswer.destroyRecord();
        // this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
