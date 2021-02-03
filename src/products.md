---
layout: layouts/products.njk
title: Products
subtitle: Here you can find a list of coding toys and accessories, robots, and assistive technologies for learners with unique needs
eleventyNavigation:
  parent: Community
  key: Products
  order: 0
permalink: "/community/products/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
pagination:
  data: collections.products
  size: 10
  alias: products
---
