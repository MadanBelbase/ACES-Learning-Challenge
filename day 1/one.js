// Log a message to the console
console.log("Node.js is best.");

// Import the 'fs' module to work with the file system
const fs = require('fs');

// Use the 'writeFile' method to write data to a file asynchronously
fs.writeFile("output.txt", "Writing File", (err) => {
  // Check if there was an error during the file-writing process
  if (err) {
    // Log an error message if something went wrong
    console.log("Error occurred");
  } else {
    // Log a success message if the file was written successfully
    console.log('File Written Successfully');
  }
});