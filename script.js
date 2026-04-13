const main = document.querySelector('main');
const sections = [...main.children];
const length = sections.length;

sections.forEach(s => main.appendChild(s.cloneNode(true)));

const fragment = document.createDocumentFragment();
sections.forEach(s => fragment.appendChild(s.cloneNode(true)));
main.insertBefore(fragment, main.firstChild);

const width = window.innerWidth;
main.scrollLeft = width * length;

main.addEventListener('scroll', () => {
    const { scrollLeft } = main;

    if (scrollLeft >= width * length * 2) {
        main.scrollLeft = scrollLeft - width * length;
        console.log('yaho1')
    }

    if (scrollLeft <= width * (length-1)) {
        main.scrollLeft = scrollLeft + width * length;
    }
}, { passive: true });