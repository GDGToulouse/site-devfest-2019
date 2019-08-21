const puppeteer = require('puppeteer');
const {Logger, LogLevel} = require('plop-logger');
const {colorEmojiConfig} = require('plop-logger/lib/extra/colorEmojiConfig');

Logger.config = colorEmojiConfig;
Logger.config.defaultLevel = LogLevel.Debug;
const logger = Logger.getLogger('pdf');

(async () => {
  logger.info("launch puppeteer browser");
  const defaultViewport = {width: 1280, height: 1700};
  const devtools = false;
  const browser = await puppeteer.launch({devtools, defaultViewport});
  try {
    logger.info("open new page");
    const page = await browser.newPage();
    logger.debug("opened new page");

    const file = 'schedule/index.html';
    const url = `http://localhost:1313/${file}`;
    logger.info("go to", url);
    const pageResponse = await page.goto(url, {waitUntil: 'networkidle2'});
    logger.debug("gone", pageResponse.statusText());

    const toHide = [
      'body>header',
      'body>footer',
      'main .hero',
    ];
    await page.$$eval(toHide.join(','), function (elts) {
      // debugger;
      elts.forEach(elt => {
        elt.parentNode.removeChild(elt);
        // elt.style.display = 'none';
      });
    });

    await page.addStyleTag({
      content: '@page { size: auto; }',
    });

    logger.info('export pdf');
    const path = 'static/schedule/schedule.pdf';
    const format = 'A3';
    const scale = .4;
    const printBackground = true;
    await page.pdf({path, format, scale, printBackground});
    logger.debug("pdf done");

  } catch (e) {
    console.error(e);
    logger.error('Oops!', e);
  } finally {
    logger.info('close puppeteer browser');
    await browser.close();
  }
})();
