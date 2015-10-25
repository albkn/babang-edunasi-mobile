Template.donateForm.events({
  'submit .donate-form': function(e) {
    e.preventDefault();
    //console.log(this);

    var raisedValue = parseInt($(e.target).find('[name=raised]').val());
    var raisedCurrent = parseInt(Router.current().data().project.raised || 0);

    var updatedValue = raisedValue + raisedCurrent;

    var data = {
      raised:  updatedValue,
    };

    Projects.update(this._id, {$set: data});
    //Update relevant session variables for graph update
    Session.set('data1', ['Remaining', Router.current().data().project.goal - (updatedValue || 0)]);
    Session.set('data2', ['Raised', updatedValue]);

  }
});
