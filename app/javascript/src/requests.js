import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      $('#tasks').empty();
      response.tasks.forEach(function (task) {
        $('#tasks').append('<div class="col-12 d-flex justify-content-between mb-3 p-2 border rounded task data-id="' + task.id + '">' + task.content + '<div><button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '></div></div>');
      });
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

export var postTask = function () {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    data: {
      task: {
        content: $('#new-task-content').val()
      }
    },
    success: function (response) {
      $('#new-task-content').val('');
      indexTasks();
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

export var deleteTask = function (id) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/' + id + '?api_key=1',
    success: function(response) {
      indexTasks();
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

export var markComplete = function (id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_complete?api_key=1',
    success: function (response) {
      indexTasks();
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

export var markActive = function (id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_active?api_key=1',
    success: function (response) {
      indexTasks();
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

export var toggleRemaining = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      $('#tasks').empty();
      var remainTasks = response.tasks.filter(function (task) {
        if(task.completed === false) {
          return true;
        }
        return false;
      });
      remainTasks.forEach(function (task) {
        $('#tasks').append('<div class="col-12 d-flex justify-content-between mb-3 p-2 border rounded task data-id="' + task.id + '">' + task.content + '<div><button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '></div></div>');
      });
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
}

export var toggleCompleted = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      $('#tasks').empty();
      var completedTasks = response.tasks.filter(function (task) {
        if (task.completed === true) {
          return true;
        }
        return false;
      });
      completedTasks.forEach(function (task) {
        $('#tasks').append('<div class="col-12 d-flex justify-content-between mb-3 p-2 border rounded task data-id="' + task.id + '">' + task.content + '<div><button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '></div></div>');
      });
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
}