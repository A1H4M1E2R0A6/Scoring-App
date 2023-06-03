let userInputTime = 0; // Variable to store user input time

// Event listener for user input
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Get current time
    const currentTime = new Date().getTime();

    // Calculate time elapsed since user input
    const timeElapsed = currentTime - userInputTime;

    console.log('Time elapsed (ms):', timeElapsed);
  }
});

// Start counting time when user provides input
document.addEventListener('keydown', function() {
  userInputTime = new Date().getTime();
});