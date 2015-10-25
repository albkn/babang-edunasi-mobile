Template.homepage.events({
  'click .banner-pictures': function(e) {
    e.preventDefault();
    var id = $(e.target).data('id');
    console.log(id);
    Router.go('projectsShow', {_id: id});
  },
});
