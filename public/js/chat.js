document.addEventListener("DOMContentLoaded", function() {
    const socket = io('http://localhost:4000');
  
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('comentarios');
    const username = 'Honorio';

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (comment !== '') {
            socket.emit('newComment', { username: username, comment: comment });
            commentInput.value = '';
        }
    });

    socket.on('newComment', (data) => {
        const commentElement = document.createElement('p');
        commentElement.innerHTML = `<strong>${data.username}:</strong> ${data.comment}`;
        commentsContainer.appendChild(commentElement);
    });
});