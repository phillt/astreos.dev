---
layout: default
title: Articles
---

<div class="articles-page">
  <h1>Articles</h1>

  <ul class="articles-list">
    {% for article in site.articles %}
      <li>
        <div class="post-meta-column">
          <span class="post-meta">{{ article.date | date_to_string }}</span>
        </div>
        <div class="post-details">
          <h2><a href="{{ article.url | relative_url }}">{{ article.title | escape }}</a></h2>
          <div class="post-excerpt">
            <p>{{ article.excerpt | strip_html }}</p>
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div> 