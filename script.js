const form = document.getElementById('todo-form');
const taskInput = document.getElementById('new-task');
const whiteboard = document.getElementById('whiteboard');
const ctx = whiteboard.getContext('2d');

function resizeCanvas() {
    whiteboard.width = whiteboard.offsetWidth;
    whiteboard.height = whiteboard.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTaskToWhiteboard(taskText);
        taskInput.value = '';
    }
});

function addTaskToWhiteboard(taskText) {
    const x = Math.random() * (whiteboard.width - 100);
    const y = Math.random() * (whiteboard.height - 30);

    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(taskText, x, y);
}

whiteboard.addEventListener('dblclick', function() {
    ctx.clearRect(0, 0, whiteboard.width, whiteboard.height);
});
