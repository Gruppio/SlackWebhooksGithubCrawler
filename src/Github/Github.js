const puppeteer = require('puppeteer')
const delay = require('delay')

class Github {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    async login() {
        // Uncomment this line and comment the next one if you want to see graphically what this
        // Script is doing
        //this.browser = await puppeteer.launch({headless: false } /*, slowMo: 250}*/)
        this.browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox'],
        });
        this.page = await this.browser.newPage()
        this.page.setViewport({ width: 1500,
            height: 764 });

        await this.page.goto('https://github.com/login')
        await this.page.waitFor('input[name=login]', { visible: true })
        await this.page.type('input[name=login]', this.username, { delay: 27 })
        await this.page.type('input[name=password]', this.password, { delay: 42 })

        await delay(100)
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.keyboard.type('\n')
        ])
        await delay(100)
    }

    async searchCode(q, page, lang, indexed, order) {
        var url = 'https://github.com/search?type=Code&q=' + encodeURIComponent(q)

        if (page) {
            url = url + '&p=' + page
        }

        if (lang) {
            url = url + '&l=' + lang
        }

        if (indexed) {
            url = url + '&s=indexed'
        }

        if(order) {
            url = url + '&o=' + order
        }
        await this.page.goto(url, {waitUntil: 'networkidle0'})
        const content = await this.page.content();
        return content
    }
}

module.exports = Github