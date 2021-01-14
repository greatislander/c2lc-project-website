---
layout: layouts/events.njk
title: Events
eleventyNavigation:
  parent: Community
  key: Events
  order: 0
permalink: "/community/events/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.events
  size: 10
  alias: events
---
