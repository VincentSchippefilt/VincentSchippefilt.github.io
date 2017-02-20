---
layout: post
title:  "How to update React Boilerplate to version 3.4, the hard way"
categories: agile work
toc: true
---

<style>
.toc-entry {
    display: block !important;
}
.toc-entry:first-child {
border-top: 1px solid #777
}
.toc-entry:last-child {
border-bottom: 1px solid #777
}
</style>

# 1. Different alternatives

* if you project is reasonably small the master branch of react-boilerplate, and you know git, you can keep a remote of boilerplate like explained in [this issue](https://github.com/mxstbr/react-boilerplate/issues/889) in github.
* if you made a large number of modifications in internals

# 1.  Make sure you have a backup

Yes, you probably did it already, but just to be sure, make sure you `git commit` and `git push`, this way you are safe.

# 1. Keep track of your own dependencies

This is probably the hardest part if you have not kept track of what is used directly by react-boilerplate and what all your developers have added in the project.  
To obtain a complete list, you should diff your  `package.json` with the one of the version of react-boilerplate you have.

# 1.  Clone the current release to a folder.