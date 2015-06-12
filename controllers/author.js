Pyr.AuthorController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert('Dracula is fictional, but was inspired by the 15th-century Romanian general and Wallachian Prince Wlad III the Impaler.')
    },
    showPicture: function () {
      this.set('isPictureShowing', true);
    },
    hidePicture: function () {
      this.set('isPictureShowing', false);
    }
  }
});
