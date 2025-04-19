---
layout: default
title: Articles
---

<div class="post-layout-container">
<div class="post-layout">
  <h1>{{ page.title }}</h1>

  <ul class="release-notes-list">
    {% for post in site.posts %}
      {% if post.type == "article" %}
        <li>
          <div class="post-meta-column">
            <span class="post-meta">{{ post.date | date_to_string }}</span>
          </div>
          <div class="post-details">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}
             <i class="fas fa-chevron-right fa-sm"></i>
             </a></h2>
            <div class="post-excerpt">
              <p>{{ post.excerpt | strip_html }}</p>
            </div>
          </div>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>
</div> 