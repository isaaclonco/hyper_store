document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const forms = document.querySelectorAll('form');
  const successMessage = document.querySelector('.success-message');

  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          forms.forEach(f => f.classList.remove('active'));
          btn.classList.add('active');
          document.getElementById(`${btn.dataset.tab}-form`).classList.add('active');
      });
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const inputs = form.querySelectorAll('input');
      let isValid = true;

      inputs.forEach(input => {
          if (!input.value) {
              isValid = false;
          }
      });

      if (isValid) {
          form.style.display = 'none';
          successMessage.style.display = 'block';
          
          // esperar 2 segundos
          setTimeout(() => {
              window.location.href = 'index.html';
          }, 2000);
      }
  };

  document.getElementById('login-form').addEventListener('submit', handleSubmit);
  document.getElementById('register-form').addEventListener('submit', handleSubmit);
});
