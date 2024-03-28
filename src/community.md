---
layout: layouts/projects.njk
title: Community
subtitle: Discover new and inspiring ideas being explored around the world to
  make coding fun and accessible for learners with unique needs.
headerBg: purple-75
eleventyNavigation:
  key: Community
  order: 5
permalink: /community/{% if pagination.pageNumber > 0 %}page/{{
  pagination.pageNumber + 1 }}/{% endif %}
pagination:
  data: collections.projects
  size: 10
  alias: projects
---
