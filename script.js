//Dark mode toggle 
const toggleBtn = document.getElementById('darkModeToggle');
const icon = toggleBtn.querySelector('i');
toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

//Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Add your smooth scrolling logic here if needed
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});