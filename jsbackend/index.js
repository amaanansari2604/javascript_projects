const express = require('express');
const app = express();
const port = 3000;

const githubData = {
  "login": "amaanansarii",
  "id": 122281681,
  "node_id": "U_kgDOB0ne0Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/122281681?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/amaanansarii",
  "html_url": "https://github.com/amaanansarii",
  "followers_url": "https://api.github.com/users/amaanansarii/followers",
  "following_url": "https://api.github.com/users/amaanansarii/following{/other_user}",
  "gists_url": "https://api.github.com/users/amaanansarii/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/amaanansarii/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/amaanansarii/subscriptions",
  "organizations_url": "https://api.github.com/users/amaanansarii/orgs",
  "repos_url": "https://api.github.com/users/amaanansarii/repos",
  "events_url": "https://api.github.com/users/amaanansarii/events{/privacy}",
  "received_events_url": "https://api.github.com/users/amaanansarii/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Amaan Ansari",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2023-01-09T13:04:51Z",
  "updated_at": "2025-12-29T01:42:43Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send("amaan ansari")
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log('example app listening on port', port)
})  