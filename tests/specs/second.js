describe('mocha describe', () => {
    it('first', (browser) => {
        browser
            .url('http://nightwatchjs.org/');
        browser.getText('.col-md-6:nth-child(1)>h1', (text) => {
            console.log(text);
        });
        browser.getText('.col-md-6:nth-child(1)>p', (text) => {
            console.log(text);
        });
    })
});