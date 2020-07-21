---
title: Day six of 100 days of Gatsby
date: "2020-07-21"
template: "post"
draft: false
slug: "day-six-of-100-days-of-gatsby"
category: "Development"
tags:
  - "Gatsby"
  - "100DaysOfGatsby"
description: "This is day six of my 100 days of Gatsby challenge. Opps, I did it again"
socialImage: ""
---
#Day six

Day 6 of #100DaysOfGatsby has been spent changing the styling for the site again.

This time instead of just changing the ccs or theme, I completely change the site. I rebuilt it using the [gatsby-starter-lumen](http://github.com/alxshelepenok/gatsby-starter-lumen). It had most of the things I was looking for, pages, posts, social media icons and links. I was looking for more of a header style than a sidebar but since this is a small site with only a few pages I do thing this works well.

It was quick and easy just copy and pasting my old about me into the new pages, and adding some information to the markdown headers.

I was using [surge.sh](surge.sh) to host it. Surge is super easy use. When you are to deploy you just do a couple of steps and you are up and running. In a terminal in your directory:

```
# Create your surge account
surge login

# Build your production site
gatsby build

# You can deploy to a surge subdomain 
# or your custom domian, choose one

# To deploy to surge.sh to a surge subdomin
surge public/

# To Deploy to your custom domain, 
# you will need to do some dns configuration, etc.
surge public/ skyfirechef.com
```
That's it, any time you are ready to deploy a new version just do a new gatsby build and deploy again.

As easy as it was, I wanted to try out [Netlify](https://netlify.com). So today I switch that too. A little bit more involved to get it setup but not much. You just create an account, hook up your github, gitlab, etc account, select which repository to use, and off it goes. If you are using a custom domain there is a little more setup but not much more.

On top of all that it is lighting fast out of the box and with just a few plugins and tweaks it's nearly off the charts. Here is the lighthouse report with the site running on Netlify

![Lighthouse report](/media/lighthouse.jpg)

Hope you enjoy the new site, I do.

Cheers,
Christopher
