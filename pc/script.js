const sections = document.querySelectorAll('main > section');
const inputContainer = document.querySelectorAll('.input-container');

sections.forEach(sec => {
    sec.addEventListener('click', (e) => {
        if (e.target.classList.contains('input-container')) return;
        if (sec.classList.contains('active')) {
            sec.classList.remove('active');
            return;
        } else {
            sections.forEach(s => s.classList.remove('active'));
            sec.classList.add('active');
        }
    });
});

