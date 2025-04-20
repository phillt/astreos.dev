---
layout: default
title: Releases
permalink: /releases/
---
<div class="post-layout-container">
<div class="post-layout">
  <h1>{{ page.title }}</h1>

  <ul class="release-notes-list">
    {% for post in site.posts %}
      {% if post.type == "release" %}
        <li>
          <div class="post-meta-column">
            {% if post.version %}
              <p class="post-version">v{{ post.version }}</p>
            {% endif %}
            <p class="post-meta">{{ post.date | date_to_string }}</p>
          </div>
          <div class="post-details">
            <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}
             <i class="fas fa-chevron-right fa-sm"></i>
             </a></h2>
            <div class="post-excerpt">
              {{ post.notes }}
            </div>
          </div>
          <div class="post-download-column">
            <p class="download-label">Download for:</p>
            {% if post.download_windows %}
              <a href="{{ post.download_windows }}" class="btn btn-download windows" title="Download for Windows">
                <i class="fab fa-windows"></i>
                <span class="btn-label">Windows</span>
              </a>
            {% endif %}
            {% if post.download_macos %}
              <a href="{{ post.download_macos }}" class="btn btn-download macos" title="Download for macOS">
                <i class="fab fa-apple"></i>
                <span class="btn-label">macOS</span>
              </a>
            {% endif %}
            {% if post.download_linux %}
              <a href="{{ post.download_linux }}" class="btn btn-download linux" title="Download for Linux">
                <i class="fab fa-linux"></i>
                <span class="btn-label">Linux</span>
              </a>
            {% endif %}
          </div>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</div> 
</div> 