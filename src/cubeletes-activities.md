---
layout: layouts/robot-activities.njk
title: Activities with Cubeletes
subtitle: Pick inclusive coding lessons that match your curriculum, learners' needs, and available resources
eleventyNavigation:
  parent: Learn
  key: Activities with Cubeletes
  order: 2
permalink: "/learn/robots/cubeletes/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.cubeletesActivities
  size: 10
  alias: robotActivities
---
