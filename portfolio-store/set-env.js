// set-env.js
const fs = require('fs');
const path = require('path');

// Path to the external .env file
const externalEnvPath = path.resolve(__dirname, '/environments/portfolio-store-env/.env');

// Path to the .env file inside your React project
const reactEnvPath = path.resolve(__dirname, '.env');

// Read the external .env file
const envFileContent = fs.readFileSync(externalEnvPath, 'utf8');

// Write the content to the React project's .env file
fs.writeFileSync(reactEnvPath, envFileContent);

console.log('Environment variables loaded from', externalEnvPath);
