const fs = require('fs');
  
const filePath = 'C:/Users/jijo.j/Downloads/MicrosoftTeams-image (7).png';
const filePathCopy = 'D:/My projects/Showcase_Project1/frontend/public/images/products/MicrosoftTeams-image (7).png';
    
fs.copyFile(filePath, filePathCopy, (err) => {
  if (err) throw err;
    
  console.log('File Copy Successfully.');
});