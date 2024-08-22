document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like-btn');
    const saveBtn = document.querySelector('.save-btn');
    const shareBtn = document.querySelector('.share-btn');
    const commentInput = document.querySelector('.comment-input');
    const postLikes = document.querySelector('.post-likes');
    let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 0;
    postLikes.textContent = `${likes} likes`;

    likeBtn.addEventListener('click', () => {
        likes++;
        postLikes.textContent = `${likes} likes`;
        localStorage.setItem('likes', likes);
    });

    saveBtn.addEventListener('click', () => {
        alert('Post saved!');
        localStorage.setItem('savedPost', 'true');
    });

    shareBtn.addEventListener('click', () => {
        alert('Post shared!');
        sessionStorage.setItem('sharedPost', 'true');
    });

    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && commentInput.value.trim() !== '') {
            const comment = document.createElement('div');
            comment.textContent = commentInput.value;
            document.querySelector('.post-comments').appendChild(comment);
            commentInput.value = '';
            let comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
            comments.push(comment.textContent);
            localStorage.setItem('comments', JSON.stringify(comments));
        }
    });

    
    const savedComments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    savedComments.forEach(commentText => {
        const comment = document.createElement('div');
        comment.textContent = commentText;
        document.querySelector('.post-comments').appendChild(comment);
    });
});
