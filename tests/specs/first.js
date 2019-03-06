

const sleep = (timeout = 10000) => {
    console.log('start waiting');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`sleep ${timeout} ms`);
            resolve();
        }, timeout);
    })
};



module.exports = {
    'Demo test' : async function (browser) {
        // let nw = browser.page.nightwatchPage();
        const getTextPromise = (selector)=>{
            return new Promise((resolve, reject) => {
                browser.getText(selector, (text) => {
                    resolve(text);
                });
            })
        };
        const urlPromise = (url)=>{
            return new Promise((resolve, reject) => {
                browser.url(url, (res) => {
                    resolve(res);
                });
            })
        };
        // console.log(nw.a + ' !!!!!!!!!!!!!!');
        // console.log(nw.urlPromise);
        // browser
        //     .url('http://nightwatchjs.org/');
        // browser.getText('.col-md-6:nth-child(1)>h1', (text) => {
        //     console.log(text);
        // });
        // await sleep(5000);
        // browser.getText('.col-md-6:nth-child(1)>p', (text) => {
        //     console.log(text);
        // });
        // const text = await browser.getText('.col-md-6:nth-child(1)>p'); // doesn't work
        await urlPromise('http://nightwatchjs.org/');
        const text = await getTextPromise('.col-md-6:nth-child(1)>h1');
        // nw.navigate();
        console.log(text);
        console.log('finish');
    }
};