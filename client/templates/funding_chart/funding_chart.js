
Template.fundingChart.rendered = function () {
  Session.set('data1', ['Remaining', Router.current().data().project.goal - (Router.current().data().project.raised || 0)]);
  Session.set('data2', ['Raised', Router.current().data().project.raised]);

  var chart = c3.generate({
    bindto: this.find('#fundingChart'),
    data: {
      columns: [['data1'],['data2']],
      type : 'donut',
    },
  });

  chart.data.colors({
  Remaining: 'rgb(190, 190, 190)',
  Raised: 'rgb(159, 232, 94)'
});

Tracker.autorun(function () {
    var data = Router.current().data();

    Session.set('data1', ['Remaining', Router.current().data().project.goal - (Router.current().data().project.raised || 0)]);
    Session.set('data2', ['Raised', Router.current().data().project.raised]);

    console.log(data);
    chart.load({columns: [
      Session.get('data1'),
      Session.get('data2'),
      ]});
    });
};
