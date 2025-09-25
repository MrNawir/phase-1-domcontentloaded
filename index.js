// Your code goes here
// Wait for the DOM to be fully parsed before manipulating elements
document.addEventListener('DOMContentLoaded', function () {
   // Target the paragraph with id="text" and update its content
   const textEl = document.getElementById('text');
   if (textEl) {
     textEl.textContent = 'This is really cool!';
   }
});