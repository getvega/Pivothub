# PivotHub

A Chrome extension for a better integration between PivotalTracker and GitHub

## Feature 1 - Get story id from pivotal tracker

For people using GitHub's post hook for Pivotal, you know how annoying it is to get the story id in Pivotal. You have to expand the story to and scroll to get the id.

The extension facilitates this by prompting you the name of the story - it will search within displayed story (in DOM, so no lengthy Ajax) and give you back "[Fixes #120OJFEN] whatever name you gave the story"

Learn more about GitHub's post hook for Pivotal here:  http://www.pivotaltracker.com/help/api?version=v3#scm_post_commit

![Search a story](http://github.com/getvega/Pivothub/raw/master/doc/overview1.png)
![Commit syntax for posthook](http://github.com/getvega/Pivothub/raw/master/doc/overview2.png)

## Feature 2 - let's think about it ;)