const {readFileSync, writeFileSync} = require('fs');
const {sync: glob} = require('glob');
const {minify} = require('html-minifier');
const {Logger, LogLevel} = require('plop-logger');
const {colorEmojiConfig} = require('plop-logger/lib/extra/colorEmojiConfig');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('minifier');
logger.level = LogLevel.All;

const htmlFiles = `public/**/*.html`;
logger.info('Compress HTML files', htmlFiles);

const totalGain = glob(htmlFiles)
  .map(file => {
    const html = readFileSync(file, 'utf8');
    const minified = minify(html, {});
    const gain = html.length - minified.length;
    if (gain > 0) {
      const percent = (gain / html.length) * 100;
      logger.debug(file, () => ['gain', percent.toFixed(2), '%'].join(" "));
      writeFileSync(file, minified, {flag: 'w'});
    }
    return gain;
  }).reduce((acc, elt) => acc + elt, 0);

logger.info('Total gain', '' + totalGain);
