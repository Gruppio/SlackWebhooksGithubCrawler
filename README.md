# Slack Webhooks Github Crawler
This repo contains a script that search on Github.com for Slack Webhooks token publicly exposed

Slack webhooks are easy to search on Github since they have all the same format:
`https://hooks.slack.com/services/TXXXXXXXX/BXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxx`

---

## The Social Experiment
Thanks to this script I've found more than 6500 Slack Webhooks on Github.com and I've sent a message on Slack to all this People warning that they have an exposed token on Github and giving more informations trough my Instagram Profile.

### Results
Most of the people appreciated that I've sent a message to them and warned them about their security problems.

---

## Technical Info

The script instruments a chromium instance using [puppeteer](https://developers.google.com/web/tools/puppeteer/) and use it to search github the prefix of the slack token.

Since there are a lot of results the scirpt search a  specific programming language and a "mode" that is the sorting option.

---

### Installation Instructions
    1) install [nodejs](https://nodejs.org/en/) 
    2) Open your terminal and cd in this folder
    3) Type `npm install`
    4) Edit `index.js` and insert your Github username and password (needed for perform the search)
    5) Type `node index.js`

Done! 🎉 

### If you like this project please:

<a href="https://www.buymeacoffee.com/gruppio" target="_blank"><img src="https://raw.githubusercontent.com/Gruppio/Sonoff-Homekit/images/images/buymeacoffee.png" alt="Buy Me A Coffee" width="300" ></a>


Gruppio 2019