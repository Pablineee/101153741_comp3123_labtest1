const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');

if (fs.existsSync(logsDir)){
    fs.readdirSync(logsDir).forEach((file) => {
        const filePath = path.join(logsDir, file);

        console.log(`delete files...${file}`);

        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDir);
} else {
    console.log('logs directory does not exist.');
}