---
layout: layouts/robot-activities.njk
title: Activities with Sphero
subtitle: Pick inclusive coding lessons that match your curriculum, learners' needs, and available resources
eleventyNavigation:
  parent: Learn
  key: Activities with Sphero
  order: 2
permalink: "/learn/robots/sphero/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.spheroActivities
  size: 10
  alias: robotActivities
---
