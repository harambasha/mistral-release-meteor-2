
if(Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('projects-listing');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('/');
    }
}]);


FlowRouter.route('/', {
    name: 'home',
    action(){
        if (Meteor.userId()) {
            FlowRouter.go('projects-listing')
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/projects-listing', {
    name: 'projects-listing',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Projects'});
    }
});
FlowRouter.route('/project/:id', {
    name: 'project',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'ProjectSingle'});
    }
});