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
const identity = obj => obj;
const idValue = obj =>
    Object.entries(obj)
        .map(([key, elt]) => ({
            ...elt,
            id: key
        }));

const dataExtractor = {
    sessions: idValue,
    speakers: idValue,
    partners: identity,
    team: identity,
    tickets: identity,
};

Object.entries(dataExtractor)
    .forEach(([key, value]) => {
        const dest = path.join(__dirname, `../test-hugo/data/${key}.yml`);
        const data = value(firebaseData[key]);
        writeToYml(data, dest);
    });
