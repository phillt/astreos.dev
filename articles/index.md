---
layout: default
title: Articles
---

<div class="post-layout-container">
<div class="post-layout">
  <h1>{{ page.title }}</h1>

  <ul class="release-notes-list">
    {% for article in site.articles %}
      <li>
        <div class="post-meta-column">
          <span class="post-meta">{{ article.date | date_to_string }}</span>
        </div>
        <div class="post-details">
          <h2><a href="{{ article.url | relative_url }}">{{ article.title | escape }}
           <i class="fas fa-chevron-right fa-sm"></i>
           </a></h2>
          <div class="post-excerpt">
            <p>{{ article.excerpt | strip_html }}</p>
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>
</div> 