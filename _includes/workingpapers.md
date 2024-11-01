<h2 id="workingpapers" style="margin: 2px 0px -15px;">Working Papers</h2>

<style>
  .pub-row .notes i > p {
    display: inline; /* Ensure inline display of markdown content */
    margin: 0;       /* Remove any default paragraph margin */
  }
</style>

<div class="publications">
<ol class="bibliography">


{% for link in site.data.workingpapers.main %}

<li>
<div class="pub-row">
  <!--
  <div class="col-sm-3 abbr" style="position: relative; padding-right:15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
  </div>
  -->
  <div class="col-sm-9" style="position: relative;">
    <div class="title">{{ link.title }}</div>
    <div class="author">{{ link.authors }}</div>
    <div class="periodical"><i>{{ link.periodical }}</i></div>
    <div class="notes"><i>{{ link.notes | markdownify }}</i></div>
    <div class="links">
      {% if link.abstract %} 
      <button class="btn btn-sm btn-bd-primary" type="button" id="toggleButton{{ forloop.index }}">
      Abstract <i class='fas fa-chevron-down' style='font-size:10px'></i>
      </button>
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" target="_blank">
      <button class="btn btn-sm btn-bd-primary" type="button">
      PDF <i class='far fa-file-pdf' style='font-size:12px;color:red'></i>
      </button></a>
      {% endif %}
      {% if link.ssrn %} 
      <a href="{{ link.ssrn }}" target="_blank">
      <button class="btn btn-sm btn-bd-primary" type="button">
      SSRN <i class='fas fa-external-link-alt' style='font-size:10px'></i>
      </button></a>
      {% endif %}
      {% if link.acm %} 
      <a href="{{ link.acm }}" target="_blank">
      <button class="btn btn-sm btn-bd-primary" type="button">
      ACM <i class='fas fa-external-link-alt' style='font-size:10px'></i>
      </button></a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
    <div class="collapsible" id="toggleBlock{{ forloop.index }}" align="justify">{{ link.abstract }}</div>
  </div>
</div>
<br>
</li>


{% endfor %}

</ol>
</div>

