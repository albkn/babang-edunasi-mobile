Server = DDP.connect('http://testedunasi.meteor.com/');
Projects = new Mongo.Collection('projects', {
  connection: Server
});
// Main configuration for all routes
// Subscribe everything and load Google Maps
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  progressSpinner : false,
});

//The first page the user sees
Router.route('/', {
  name: 'homepage',
  waitOn: function() {
    return [Server.subscribe('projects')];
  },
  data: function() {
    return {
      projects: Projects.find()
    };
  }
});

Router.route('/projects/:_id', {
  name: 'projectsShow',
  waitOn: function() {
    return [Server.subscribe('projectsOne', this.params._id)];
  },
  data: function() {
    return {
      project: Projects.findOne()
    };
  }
});
