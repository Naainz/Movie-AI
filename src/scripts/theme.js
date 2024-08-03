// src/scripts/theme.js

const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  themeToggleIcon.classList.toggle('fa-sun', theme !== 'dark');
  themeToggleIcon.classList.toggle('fa-moon', theme === 'dark');
  localStorage.setItem('theme', theme);
};

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

// Apply the saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
