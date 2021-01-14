---
layout: layouts/lesson-plans.njk
title: Lesson Plans
eleventyNavigation:
  parent: Learn
  key: Lesson Plans
  order: 2
permalink: "/learn/lesson-plans/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.lessonPlans
  size: 10
  alias: lessonPlans
---
