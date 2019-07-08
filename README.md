## Slack Webhooks Github Crawler
This repo contains a script that search on Github.com for Slack Webhooks token publicly exposed

These tokens are formatted like: `https://hooks.slack.com/services/TXXXXXXXX/BXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxx` so it is very easy to search this kind of information on Github.

### The Social Experiment
Thanks to this script I've found more than 6500 Slack Webhooks on Github.com and I've sent a message on Slack to all this People warning that they have an exposed token on Github and giving more informations trough my Instagram Profile.

### The Results
Most of the people appreciated that I've sent a message to them and warned them about their security problems.

### Instructions
    1) install [nodejs](https://nodejs.org/en/) 
    2) Open your terminal and cd in this folder
    3) Type `npm install`
    4) Edit `index.js` and insert your Github username and password (are needed in order to perform the search)
    5) Type `node index.js`

Gruppio 2019