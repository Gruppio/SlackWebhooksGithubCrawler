# Slack Webhooks Github Crawler
This script search for Slack Webhooks token publicly exposed on Github.com

Slack webhooks are easy to search on Github since they have all the same format:
`https://hooks.slack.com/services/TXXXXXXXX/BXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxx`

---

## The Social Expeoriment
I've run this script on a cloud function every hour for 6 months and in total I've collected more than **6500 Slack Webhooks**.
Afterward I've sent a message to all the #general channels warning that they have an exposed token on Github.
The message received by the people was the following:
<img src="https://raw.githubusercontent.com/Gruppio/SlackWebhooksGithubCrawler/images/slackmessage.png" alt="Slack Message" width="250" >


### Results
In total I've sent ~6500 Slack messages and the youtube video that was explaining the experiment had ~3700 views, so we can assume that roughly 57% of webhooks are still valid.
\* Supposing that only one person had watched this video per channel

### Comments
Most of the people appreciated that I've sent a message to them and warned them about their security problems.
You can read all the comments under the youtube video that I've sent to them:
https://www.youtube.com/watch?v=ybFTGeJICho&t=2s

---

## Technical Info

The script instruments a chromium instance using [puppeteer](https://developers.google.com/web/tools/puppeteer/) and use it to search github the prefix of the slack token.
Since there are a lot of results the scirpt search a  specific programming language and a "mode" that is the sorting option.

---

### Installation Instructions
 1) install [nodejs](https://nodejs.org/en/) 
 2) Open your terminal and cd in the repo folder
 3) Type `npm install`
 4) Edit `index.js` and insert your Github username and password (needed for perform the search)
 5) Type `node index.js`

Done! 🎉 

### If you like this project please:

<a href="https://www.buymeacoffee.com/gruppio" target="_blank"><img src="https://raw.githubusercontent.com/Gruppio/SlackWebhooksGithubCrawler/images/buymeacoffee.png" alt="Buy Me A Coffee" width="300" ></a>

Gruppio 2019