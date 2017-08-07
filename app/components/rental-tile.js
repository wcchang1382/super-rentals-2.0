import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing',true);
    },
    imageHide: function() {
      this.set('isImageShowing',false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental){
      if (confirm('Are you sure you want to delete '+rental._internalModel.__data.owner+"'s rental?")){
        this.sendAction('destroyRental', rental)
      }
    }
  }
});
