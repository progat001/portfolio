
const sections = document.querySelectorAll('.animate, .slideInRight, .slideInLeft, .slideInBottom, .bounce');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});