---
layout: default
title: Releases
permalink: /releases/
---

<div class="release-notes-page">
  <h1>{{ page.title }}</h1>

  <ul class="release-notes-list">
    {% for post in site.posts %}
      <li>
        <div class="post-meta-column">
          {% if post.version %}
            <p class="post-version">v{{ post.version }}</p>
          {% endif %}
          <p class="post-meta">{{ post.date | date_to_string }}</p>
        </div>
        <div class="post-details">
          <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
          <div class="post-excerpt">
            {{ post.excerpt }}
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div> 