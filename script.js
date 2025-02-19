// Handle file upload and display result
document.getElementById('uploadBtn').addEventListener('click', () => {
  document.getElementById('audioFile').click();
});

document.getElementById('audioFile').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Simulate AI processing
    setTimeout(() => {
      document.getElementById('result').innerText = "Result: Suspicious (Mentioned OTP multiple times)";
    }, 2000);
  }
});

// Demo file upload
document.getElementById('demoUploadBtn').addEventListener('click', () => {
  document.getElementById('demoAudioFile').click();
});

document.getElementById('demoAudioFile').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Simulate AI processing
    setTimeout(() => {
      document.getElementById('demoResult').innerText = "Result: Not Suspicious";
    }, 2000);
  }
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
});