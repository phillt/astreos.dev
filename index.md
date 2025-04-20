---
layout: default
title: "Astreos (beta) - Take Control of Your Budgeting"
---
{%- assign latest_post = site.posts.first -%}

<div class="hero">
  <div class="hero-content">
    <h1>Spending is easy. Budgeting should be too.</h1>
    <p>No subscriptions. No tracking. Just powerful budgeting built for how you actually get paid — bi-weekly, monthly, or whenever your paycheck hits.</p>
    {% include download-buttons.html latest_post=latest_post %}
  </div>
  <img src="{{ '/assets/images/app-feature.png' | relative_url }}" alt="Astreos offline budgeting app screenshot" class="hero-image">
</div>

<section id="features" class="content-section">
  <h2>Offline Budgeting Software Features</h2>

  <div class="feature-item image-left">
    <div class="feature-image">
      <img src="{{ '/assets/images/budget-overview.png' | relative_url }}" alt="Astreos pay period budget planner view">
    </div>
    <div class="feature-content">
      <h3>Pay Period Budget Planner</h3>
      <p>Astreos organizes your budget around your paychecks, so you always know what's covered and what's coming up.</p>
    </div>
  </div>

  <div class="feature-item image-right">
    <div class="feature-image">
      <img src="{{ '/assets/images/bills-section.png' | relative_url }}" alt="Tracking bills and expenses offline in Astreos">
    </div>
    <div class="feature-content">
      <h3>Offline Bill and Expense Tracker</h3>
      <p>Add your bills and daily expenses in seconds. Astreos shows you exactly where your money is going.</p>
    </div>
  </div>

  <div class="feature-item image-left">
    <div class="feature-image">
      <img src="{{ '/assets/images/rollover.png' | relative_url }}" alt="Astreos budget rollover feature for leftover money">
    </div>
    <div class="feature-content">
      <h3>Budget Rollover Tool</h3>
      <p>Got cash left at the end of a pay period? You can carry it forward to help with the next one.</p>
    </div>
  </div>

  <div class="feature-item image-right">
    <div class="feature-image">
      <img src="{{ '/assets/images/stay-on-top.png' | relative_url }}" alt="Astreos bill due date tracker grouped by pay period">
    </div>
    <div class="feature-content">
      <h3>Pay Period Bill Reminders</h3>
      <p>Never forget a bill again. Astreos groups bills by payday, so you're always prepared.</p>
    </div>
  </div>

</section>

<section id="control" class="feature-item-centered">
    <div class="centered-brand">
      <img src="{{ '/assets/images/logo.svg' | relative_url }}" alt="Astreos Logo" class="centered-brand-logo">
      <span class="centered-brand-text">Astreos</span>
    </div>
    <div class="feature-content">
      <h3>Privacy-Focused Desktop Budgeting</h3>
      <p>No subscriptions, no account required, no syncing to your bank. Your data stays with you.</p>
    </div>
  </section>
