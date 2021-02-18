---
layout: layouts/robot-activities.njk
title: Activities with Dash & Dot
subtitle: Pick inclusive coding lessons that match your curriculum, learners' needs, and available resources
eleventyNavigation:
  parent: Learn
  key: Activities with Dash & Dot
  order: 2
permalink: "/learn/robots/dash-and-dot/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.dashAndDotActivities
  size: 10
  alias: robotActivities
---
