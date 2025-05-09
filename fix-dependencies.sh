#!/bin/bash

echo "Step 1: Removing old dependencies."
rm -rf node_modules
rm -f package-lock.json

echo "Step 2: Installing stable versions of dependencies."
npm install react-router-dom@6.14.1 axios@1.4.0 tailwindcss@3.3.2 
postcss@8.4.24 autoprefixer@10.4.14

echo "Step 3: Checking for vulnerabilities."
npm audit fix

echo "Step 4: Checking vulnerability status"
npm audit

echo "Done. You can run app with: npm start"

echo " Step 5: Committing changes to Git"
git add .
git commit -m "Fixed dependencies and resolved vulnerabilities"
git push origin main

echo "Changes have been successfully committed and pushed to the 
repository"
