---
layout: default
title: Articles
---

<div class="post-layout-container">
<div class="post-layout">
  <h1>{{ page.title }}</h1>

  <div class="articles-grid">
    {% assign articles = site.posts | where: "type", "article" | reverse %}
    {% for post in articles %}
      <div class="article-card">
        {% if post.cover_image %}
          <a href="{{ post.url | relative_url }}" class="article-image-link">
             <img src="{{ post.cover_image | relative_url }}" alt="{{ post.title | escape }}" class="article-image">
          </a>
        {% endif %}
        <div class="article-content">
          <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more">Read More <i class="fas fa-arrow-right fa-sm"></i></a>
        </div>
      </div>
    {% else %}
      <p>No articles found.</p>
    {% endfor %}
  </div>
</div>
</div> 