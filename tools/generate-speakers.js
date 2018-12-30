const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');


const writeOption = {
    flag: 'w'
};

const firebaseData = require('../test-hugo/data/firebase-data.json');

const generateSpeakerData = (id, speaker) => {
    const {name, bio, company, companyLogo, country, photo, socials} = speaker;
    const frontMatter = {id, name, company, companyLogo, country, photo, socials};
    return `---
${yaml.safeDump(frontMatter, {skipInvalid: true})}
---

${bio}
`;
};

Object.entries(firebaseData.speakers)
    .map(([id, speaker]) => ([id, generateSpeakerData(id, speaker)]))
    .forEach(([id, data]) => {
        const dest = path.join(__dirname, `../test-hugo/content/speakers/${id}.md`);
        console.log('Write to', dest);
        fs.writeFileSync(dest, data, writeOption);
    });