---
layout: post
title:  "Creating a medium complexity software"
date:   2016-10-16 23:32:00 +0200
categories: architecture
---

In February 2015 my team and I finished implementing a mildly complex system for our Total. The system's name is Contractors Portal.
We worked on it for about 7 month, with the best intentions:

- high developer throughput
- minimum of moving parts to be simple to understand
- completely tested
- completely pair programmed
- completely agile

Before it started, we even had some time to try out multiple spikes to decide which stack we would like to use. At the beginning of the project we chose on those technologies and framework

1. Sql Server as storage. Reasons: 
- we all knew it well.
- it was the customer first choice.
- we needed an easy way to allow power users to create custom reports
1. Business layer in C# and .Net. Reasons:
- what else, we are the Agile.Net team in my company :) (more on that later, there is something else...)
- we all knew it well.
- it would allow us to easily configure continuous testing, integration and delivery using our VSTS infrastructure
1. Data access layer in C#, using Entity Framework. Reasons:
- we all knew it well.
- even though EF is slow, it was still fast enough to support our expected load.
- EF Migrations is a good way to design the database incrementally.
- disabling lazy loading and forcing the developer to eager load and/or  explicit loading related entities makes sure we don't create too many N+1 problems
- we added in our Definition of Done that every query should be inspected (not that we don't trust EF to do a good job)
1. A Service Layer with ASP.Net Web API. Reasons:
- most of us knew it. none of us knew it well.
- we didn't need the complex configuration of WCF.
- we wanted a self documenting API.
1. A front-end layer in JavaScript/HTML/CSS (yes, in that order). Reasons:
- we wanted to be able to develop the front-end and refresh the browser without stopping the server and without compilation time.
- we wanted full control over the rendered HTML
1. DurandalJs as UI framework. Reasons:
- none of us had previous experience with full front-end framework in JavaScript, so we needed a framework that was small and simple.
- we all knew some form of MVC or MVVM, DurandalJs is MVVM.
- I wanted a framework that any developer could learn completely in a few days (or less)
- we were able in JavaScript, but not *good*, so when we looked at JavaScript frameworks, we used our back-end eyes. That means that we immediately hated all frameworks with magic strings everywhere, so no angular.
- 2 of us had worked recently with knockouts which is the binding framework DurandalJs uses. And we liked it.
- it was fast enough to use on mobile devices.
1. Bootstrap + a Theme. Reasons:
- we were not UI experts, I wanted to write literally no CSS.
- we needed a responsive design, to do mostly forms
- examples and documentation of Bootstrap are great !
1. MSTest for unit test of the back-end. Reasons:
- I worked in the past with MSTest and NUnit. They were equivalent for the usage I had in mind so I chose 1 less dependency.
1. a JavaScript test framework that we ended up not using.