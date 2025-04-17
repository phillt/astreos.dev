---
layout: default
title: Release Notes
permalink: /release-notes/
---

<div class="release-notes-page">
  <h1>{{ page.title }}</h1>

  <ul class="release-notes-list">
    {% for post in site.posts %}
      <li>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        <p class="post-meta">{{ post.date | date_to_string }}</p>
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
      </li>
    {% endfor %}
  </ul>
</div> 