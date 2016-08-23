var pathVar = window.location.pathname.split('/');
var HOST = location.hostname.split('.')[2];
// var spinner = $('#spinner');
// var spinnerActive = false;
// var spinnerTimer;

var _debug = {
  active: true,
  log: [],
  logger: function(message) {
    if(_debug.active) {
      _debug.log.push(message);
    }
  }
};

// var ViewModel = {};
// ViewModel.EventsList = ko.observableArray();
//
// ViewModel.Event = {
//   _id: ko.observable(),
//   name: ko.observable(),
//   location: ko.observable(),
//   dateTime: ko.observable(),
//   invitees: ko.observableArray(),
//   comments: ko.observable(),
//   links: {
//     edit: ko.observable()
//   }
// };
// ViewModel.UserList = ko.observableArray();
// ViewModel.User = {
//   _id: ko.observable(),
//   userName: ko.observable(),
//   password: ko.observable(),
//   firstName: ko.observable(),
//   lastName: ko.observable(),
//   email: ko.observable()
// }
//
//
// function updateEventsList(data) {
//   ViewModel.EventsList(data);
//   console.log(data);
// }
//
// function updateEvent(data) {
//   ViewModel.Event._id(data._id);
//   ViewModel.Event.name(data.name);
//   ViewModel.Event.location(data.location);
//   ViewModel.Event.dateTime(data.dateTime);
//   ViewModel.Event.invitees(data.invitees);
//   ViewModel.Event.comments(data.comments);
//   ViewModel.Event.links.edit(data.links.edit);
// }
//
// function updateUsersList(data){
//   ViewModel.UserList(data);
//   console.log(data)
// }
//
// function updateUser(data){
//   ViewModel.User._id(data._id);
//   ViewModel.User.userName(data.userName);
//   ViewModel.User.password(data.password);
//   ViewModel.User.firstName(data.firstName);
//   ViewModel.User.lastName(data.lastName);
//   ViewModel.User.email(data.email);
// }
//
//
// $('#createUser').click(function (e)
// {
//   var postData = {
//     'email': $('#emailInput').val(),
//     'password': $('#passwordInput').val()
//   }
//
//   $.ajax({
//     'url': '/api/users',
//     'method': 'POST',
//     'dataType': 'json',
//     'data': postData,
//     'beforeSend': function(){
//       $('#spinner').show();
//     },
//     'success': function(data){
//
//     },
//     "error": function(data){
//
//     },
//     "complete": function(data){
//       $('#spinner').fadeOut();
//       window.location.href = '/profile'
//     }
//   });
//
//   return false;
// });
// ko.applyBindings();
$(document).ready(function(){
  $('#eventDate').datetimepicker();
});
