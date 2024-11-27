require('dontenv').config()
const express = require('express')
const app = express();
const port =3500
const gitHubData = {
    "login": "nikith555",
    "id": 133496243,
    "node_id": "U_kgDOB_T9sw",
    "avatar_url": "https://avatars.githubusercontent.com/u/133496243?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nikith555",
    "html_url": "https://github.com/nikith555",
    "followers_url": "https://api.github.com/users/nikith555/followers",
    "following_url": "https://api.github.com/users/nikith555/following{/other_user}",
    "gists_url": "https://api.github.com/users/nikith555/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nikith555/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nikith555/subscriptions",
    "organizations_url": "https://api.github.com/users/nikith555/orgs",
    "repos_url": "https://api.github.com/users/nikith555/repos",
    "events_url": "https://api.github.com/users/nikith555/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nikith555/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 23,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-05-13T09:38:20Z",
    "updated_at": "2023-12-07T13:27:45Z"
  }


app.get('/',(req, res) => {
    res.send('Hello World!')
})
app.get('/login',(req, res) => {
    res.send("Hello Nikhith")
})
app.get('/youtube',(req,res) => {
    res.send("<h1>Backend</h1>")
})
app.get('/github',(req,res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)

})