---
layout: layouts/projects.njk
title: Projects
subtitle: Here you can find new and inspiring ideas being explored around the world to make coding fun and accessible for learners with unique needs
eleventyNavigation:
  parent: Community
  key: Projects
  order: 1
permalink: "/community/projects/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.projects
  size: 10
  alias: projects
---
