const _ = require('lodash')
const Core = require("./src/Core/Core")

const modes = [0, 1, 2]
const languages = ["JSON", "XML", "Shell", "Python", "Java", "JavaScript", "Ruby", "Swift", "PHP", "Markdown", "YAML", "DotNet", "C", "Text", "HTML", "C++"]

const githubUsername = "YOUR GITHUB USERNAME"
const githubPassword = "YOUR GITHUB PASSWORD"

const language = _.sample(languages)
const mode = _.sample(modes)

const core = new Core(githubUsername, githubPassword)

console.log("Start Search " + language + ", mode:" + mode +"...")
core.searchSlackWebhooks(language, mode).then ((numWebhooksFound) => {
    console.log("Done. Found " + numWebhooksFound + " slack webhooks, for: " + language + " and mode:" + mode);
})

