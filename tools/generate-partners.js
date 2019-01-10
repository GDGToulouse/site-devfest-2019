const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');


const writeOption = {
    flag: 'w'
};

const firebaseData = require('./firebase-data.json');

const generatePartnerGroupData = group => {
    const {title, logos} = group;
    return logos
        .map(partner => ({
            title: partner.name,
            type: 'partner',
            category: slugify(title.toLowerCase()),
            website: partner.url,
            logo: partner.logoUrl,
            socials: []
        })).map(generatePartnerData);

};

const generatePartnerData = (partner) => {
    const data = `---
${yaml.safeDump(partner, {skipInvalid: true})}---

Find ${partner.title} on [${partner.website}](${partner.website})

![${partner.title}](${partner.logo})
`;

    return {id: partner.title.toLowerCase(), parent: partner.category, data};
};

Object.values(firebaseData.partners)
    .map(group => generatePartnerGroupData(group))
    .reduce((acc, elt) => ([...acc, ...elt]), [])
    .forEach(({id, parent, data}) => {
        const parentFile = path.join(__dirname, `../content/partners/${slugify(parent)}`);
        fs.mkdirSync(parentFile, {recursive: true});
        const dest = path.join(parentFile, `${slugify(id)}.md`);
        console.log('Write to', dest);
        fs.writeFileSync(dest, data, writeOption);
    });