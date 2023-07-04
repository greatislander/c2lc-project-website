---
layout: layouts/resources.njk
title: Accessible Coding Resources
subtitle: Find tips and strategies to help you teach coding in a more accessible way.
headerBg: orange-75
eleventyNavigation:
  parent: Learn
  key: Accessible Coding Resources
  order: 1
permalink: /learn/resources/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}
pagination:
  data: collections.resources
  size: 10
  alias: resources
---
