// Get rid of the "#" in the uri
App.Router.reopen({
  location: 'auto',
  routURL: '/'
});

App.Router.map(function() {
  this.resource('leads', { path: '/' }, function() {
    this.route('new');
    this.resource('lead', { path: '/leads/:id' }, function() {
      this.route('edit')
    });
  })
})
