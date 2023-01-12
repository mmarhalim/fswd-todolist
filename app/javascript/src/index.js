import $ from 'jquery';

import {
  indexTasks,
  postTask,
  deleteTask,
  markActive,
  markComplete,
  toggleCompleted,
  toggleRemaining
} from "./requests.js";

$(function() {

  $('#create-task').on('submit', function (e) {
    e.preventDefault();
    postTask();
  });

  $(document).on('click', '.delete', function () {
    deleteTask($(this).data('id'));
  });

  $(document).on('change', '.mark-complete', function () {
    if (this.checked) {
      markComplete($(this).data('id'));
    } else {
      markActive($(this).data('id'));
    }
  });

  $(document).on('click', '#all', function () {
    indexTasks();
  });

  $(document).on('click', '#remaining', function () {
    toggleRemaining();
  });

  $(document).on('click', '#completed', function () {
    toggleCompleted();
  });

  indexTasks();

});

