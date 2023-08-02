$('.form-input-task').on('submit', function addTasks(e) {
  e.preventDefault();

  // Adicionando tasks numa lista:
  const newTaskValue = $('#input-task').val();
  const newTask = $(`<li></li>`);
    
  $(`<p>${newTaskValue}</p>`).appendTo(newTask); 

  $(newTask).appendTo('.task-list ol');

  // Limpando o campo para adicionar novas tasks
  $('#input-task').val('');

  // Aplicando o efeito de palavra traçada ao meio:
  $('.task-list ol li p').click(function applyLineThrough() {
    $(this).css("text-decoration", "line-through");
  });
});