---
layout: layouts/robot-activities.njk
title: Activities with Cubetto
subtitle: Pick inclusive coding lessons that match your curriculum, learners' needs, and available resources
eleventyNavigation:
  parent: Learn
  key: Activities with Cubetto
  order: 2
permalink: "/learn/robots/cubetto/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.cubettoActivities
  size: 10
  alias: robotActivities
---
