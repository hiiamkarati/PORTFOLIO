
    const roles = document.querySelectorAll('.role');
    let currentRoleIndex = 0;

    function changeRole() {
        roles.forEach((role, index) => {
            role.classList.remove('active');
            if (index === currentRoleIndex) {
                role.classList.add('active');
            }
        });
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }

    setInterval(changeRole, 2000);
    changeRole(); // Initialize first role
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    