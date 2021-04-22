---
layout: layouts/activities-type
title: Unplugged Activites
type: Unplugged
permalink: "/learn/activities/unplugged/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
eleventyNavigation:
  parent: Activities Library
  key: Unplugged Activities
  order: 0
pagination:
  data: collections.unpluggedActivities
  size: 10
  alias: activities
---
