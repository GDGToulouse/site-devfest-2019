const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');


const writeOption = {
    flag: 'w'
};

const firebaseData = require('./firebase-data.json');

const generateSpeakerData = (id, speaker) => {
    const frontMatter = {id, ...speaker};
    delete frontMatter.bio;
    return `---
${yaml.safeDump(frontMatter, {skipInvalid: true})}
---

${speaker.bio}
`;
};

Object.entries(firebaseData.speakers)
    .map(([id, speaker]) => ([id, generateSpeakerData(id, speaker)]))
    .forEach(([id, data]) => {
        const dest = path.join(__dirname, `../content/speakers/${id}.md`);
        console.log('Write to', dest);
        fs.writeFileSync(dest, data, writeOption);
    });