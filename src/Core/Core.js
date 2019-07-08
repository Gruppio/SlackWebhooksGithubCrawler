const Github = require('../Github/Github')
const delay = require('delay')

class Core {
    constructor(githubUsername, githubPassword) {
        this.github = new Github(githubUsername, githubPassword)
    }

    async searchSlackWebhooks(language, mode) {
        await this.github.login()
        var numUrls = 0
        for(var page = 1; page <= 100; page++) {
            numUrls += await this.searchForLanguageAndPageWithMode(language, page, mode)
            await delay(500)
        }
        return numUrls
    }

    async searchForLanguageAndPageWithMode(language, page, mode) {
        var code = null
        if (mode === 1) {
            code = await this.github.searchCode('"hooks.slack.com"', page, language, true, "asc")
        } 
        else if (mode === 2) {
            code = await this.github.searchCode('"hooks.slack.com"', page, language, true, "desc")
        } else {
            code = await this.github.searchCode('"hooks.slack.com"', page, language)
        }
        const numUrlFound = await this.extractSlackWebhooksFromCode(code)
        console.log(numUrlFound + " Urls Found, Search(mode: " + mode + "): " + language + ", page: " + page)
        return numUrlFound
    }

    async extractSlackWebhooksFromCode(code) {
        var regex = /services\/T\w{8}\/B\w{8}\/\w{24}/g;
        const urls = code.match(regex)
        if (urls) {
            const uniqueUrls = urls.filter((elem, pos) => {
                return urls.indexOf(elem) === pos;
            })

            for(var i = 0; i < uniqueUrls.length; i++) {
                const url = uniqueUrls[i]
                const completeUrl = "hooks.slack.com/" + url
                console.log(completeUrl)
            }
            return uniqueUrls.length
        }
        return 0
    }

    async asyncForEach(array, callback) {
        if (array.length == 0) {
            return 
        }
        var last = array[array.length - 1]
        for (const item of array) {
            await callback(item);
            if(item === last) {
                return
            }
        }
    }
}

module.exports = Core