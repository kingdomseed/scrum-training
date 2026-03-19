const form = document.getElementById('intakeForm');
const errorBanner = document.getElementById('errorBanner');
const successView = document.getElementById('successView');
const introNote = document.getElementById('introNote');

function validateForm() {
  let valid = true;
  const requiredCards = form.querySelectorAll('.form-card[data-required]');
  requiredCards.forEach(card => {
    card.classList.remove('has-error');
    const input = card.querySelector('input[type="text"], input[type="email"], textarea');
    const radios = card.querySelectorAll('input[type="radio"]');
    if (input) {
      if (!input.value.trim()) { card.classList.add('has-error'); valid = false; }
    } else if (radios.length) {
      if (!card.querySelector('input[type="radio"]:checked')) { card.classList.add('has-error'); valid = false; }
    }
  });
  return valid;
}

form.addEventListener('input', e => {
  const card = e.target.closest('.form-card');
  if (card) card.classList.remove('has-error');
});
form.addEventListener('change', e => {
  const card = e.target.closest('.form-card');
  if (card) card.classList.remove('has-error');
});

// Only prevent submit when validation fails; otherwise let the form POST naturally
form.addEventListener('submit', e => {
  if (!validateForm()) {
    e.preventDefault();
    const first = form.querySelector('.form-card.has-error');
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

// Show success view when redirected back after submission
if (new URLSearchParams(window.location.search).has('success')) {
  form.style.display = 'none';
  introNote.style.display = 'none';
  errorBanner.style.display = 'none';
  successView.style.display = 'block';
}
