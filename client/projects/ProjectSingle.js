Template.ProjectSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('projects');
    });
});
Template.ProjectSingle.helpers({
    project: ()=> {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    }
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MM-DD-YYYY');
});