const { argv } = require('node:process');
const { Builder, Browser, By, Key, until, locateWith } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { removeConsoleHandler } = require('selenium-webdriver/lib/logging');

func = async (drop, tut, add) => {
    let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(new chrome.Options().setPageLoadStrategy('eager'))//.addArguments('--headless=new'))
        .build();
    await driver.manage().setTimeouts({ implicit: 30000 });
    while (true) {
        await driver.get('https://quest.pecs.uwaterloo.ca/psc/SS/ACADEMIC/SA/c/SA_LEARNER_SERVICES.SSR_SSENRL_SWAP.GBL?Page=SSR_SSENRL_SWAP&Action=A&ACAD_CAREER=UG&ENRL_REQUEST_ID=0000000000&INSTITUTION=UWATR&STRM=1249');
        await driver.wait(until.elementLocated(By.id('DERIVED_REGFRM1_DESCR50$225$')), 120000).click();
        await driver.findElement(By.css(`option[value='${drop}']`)).click()
        await driver.findElement(By.id('DERIVED_REGFRM1_CLASS_NBR')).sendKeys(add);
        await driver.findElement(By.id('DERIVED_REGFRM1_SSR_PB_ADDTOLIST2$106$')).click();
        let tutDiv = await driver.findElement(By.xpath(`//span[text()='${tut}']`));
        let tutBut = await driver.findElement(locateWith(By.css('input')).toLeftOf(tutDiv));
        await tutBut.click();
        // await driver.findElement(By.id('SSR_CLS_TBL_R1$sels$3$$0')).click();
        await driver.findElement(By.id('DERIVED_CLS_DTL_NEXT_PB')).click();
        try {
            await driver.findElement(By.css('input[name="DERIVED_CLS_DTL_NEXT_PB"]')).click();
        } catch {
            await driver.findElement(By.css('input[name="DERIVED_CLS_DTL_NEXT_PB"]')).click();
        }
        await driver.findElement(By.id('DERIVED_REGFRM1_SSR_PB_SUBMIT')).click();
        try {
            await driver.findElement(By.xpath("//b[text()='Success:  ']"));
            console.log('Successfully switched classes');
            break;
        } catch {
            console.log('Couldn\'t switch classes. Trying again.');
            continue;
        }
    }

}

6927
if ((argv.length - 2) % 3 != 0) {
    console.log('Invalid number of arguments');
    throw 'Invalid number of arguments';
}
if (argv.length == 2) {
    func('6927', '6441', '6928');
} else {
    for (let i = 2; i < argv.length; i += 3) {
        func(argv[i], argv[i + 1], argv[i + 2]);
    }
}


