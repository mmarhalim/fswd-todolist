import $ from 'jquery';

import {
  indexTasks,
  postTask,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function (task) {
    return "<div class='col-12 d-flex justify-content-between mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\
      <div><button class='delete' data-id='" + task.id + "'>Delete</button><input type='checkbox'></div></div>";
  });

  $("#tasks").html(htmlString);
});