const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const writeOption = {
    flag: 'w'
};

const writeToYml = (list, dest) => {
    const data = yaml.safeDump(list);
    console.log('Write to', dest);

    fs.writeFileSync(dest, data, writeOption);
};

const firebaseData = require('../test-hugo/data/firebase-data.json');

['partners', 'team', 'tickets']
    .forEach(key => {
        const dest = path.join(__dirname, `../test-hugo/data/${key}.yml`);
        const data = firebaseData[key];
        writeToYml(data, dest);
    });
