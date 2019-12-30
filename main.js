const removeTask = (e) => {

    // e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = 'line-through';
    // e.target.remove();
    const index = e.target.dataset.kay;
    console.log(index);
    document.querySelector(`[data-kay="${index}"]`).remove();
}


document.querySelectorAll('button[data-kay]').forEach(liElement => liElement.addEventListener('click', removeTask));