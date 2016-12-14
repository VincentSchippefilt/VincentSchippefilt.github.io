---
layout: post
title:  "Moving from WordPress to Jekyll"
date:   2016-08-19 17:43:00 +0200
categories: jekyll WordPress
---

TL;DR
=====
<div class="clearfix">
<i class="fa fa-wordpress fa-5x pull-left"></i>
<i class="fa fa-long-arrow-right fa-5x pull-left"></i>
<img src="/img/logo-jekyll-rss.png" class="pull-left"  alt="logo jekyll" />
</div>

cheaper, faster, more portable.



My view on WordPress
====================
Earlier last year my personal site and blog was hosted in Microsoft Azure, running a shared app service instance and a free MySql.

Now, it is a given that I do not know anything about PHP or about WordPress itself, and that the product is a large engine, with a lot of functionalities out of the box and a very large ecosystem of plugins.

Why did I change?
=================

Hosting price
-------------
I was hosting my blog on a shared app instance in Azure. It cost around 14€/month all inclusive. Given that my blog is just starting, and that I have virtually no visits, even this small amount was too expensive.

With Jekyll, I can host it completely for free using [github pages](https://pages.github.com/).

Performance (page load)
-----------------------
To make it simple, even if I am not obsessed with every little byte, I want everything to load fast enough. This includes the first load of anything, the opening of the development environment and of course the feeling of speed of the readers.

Control over the rendered page
------------------------------
This is completely subjective. I am sure that people that master PHP and WordPress find it easy to take complete control over the engine, but it is no my case. I tried to let the layout and functionalities be driven by the themes and plugins, but the ecosystem in WordPress is vast. Finding a reasonable template and theme takes away even more control. Adding plugins for the simplest things: event more control taken away.

Local debug
------------
It is always nice to have a local instance to try things out. This is very easy with Jekyll but it requires a web server for PHP and a database engine for WordPress. 

Given that everything about this blog is hosted on github, any machine is a dev machine. I am pretty sure I can even do small changes from my phone.