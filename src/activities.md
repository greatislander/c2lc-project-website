---
layout: layouts/activities.njk
title: Activities
eleventyNavigation:
  parent: Learn
  key: Activities
  order: 1
permalink: "/learn/activities/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.activities
  size: 10
  alias: activities
---
