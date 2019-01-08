const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');


const writeOption = {
    flag: 'w'
};

const firebaseData = require('./firebase-data.json');


const generateSessionData = (id, session) => {
    const frontMatter = {id, ...session};
    const {type} = frontMatter;
    delete frontMatter.description;
    delete frontMatter.type;
    frontMatter.talkType = type;
    return `---
${yaml.safeDump(frontMatter, {skipInvalid: true})}
---

${session.description}
`;
};

const generateSessionName = (id, title) => {
    const name = title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/gi, '_')
        .toLowerCase();
    return `${id}_${name}.md`;
};

Object.entries(firebaseData.sessions)
    .filter(([_, session]) => !session.isBreak)
    .map(([id, session]) => ([
        generateSessionName(id, session.title),
        generateSessionData(parseInt(id, 10), session)]))
    .forEach(([filename, data]) => {
        const dest = path.join(__dirname, `../content/talks/${filename}`);
        console.log('Write to', dest);
        fs.writeFileSync(dest, data, writeOption);
    });