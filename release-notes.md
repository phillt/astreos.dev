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
        <div class="post-download-column">
          {% if post.download_windows %}
            <a href="{{ post.download_windows }}" class="btn btn-download windows" title="Download for Windows">Win</a>
          {% endif %}
          {% if post.download_macos %}
            <a href="{{ post.download_macos }}" class="btn btn-download macos" title="Download for macOS">Mac</a>
          {% endif %}
          {% if post.download_linux %}
            <a href="{{ post.download_linux }}" class="btn btn-download linux" title="Download for Linux">Lin</a>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>
</div> 