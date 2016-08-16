---
---
var data = 
[{% for employer in site.data.exp %}    {
        "company":
        {
            "name":"{{ employer.Company }}", 
            "activities":
            [{% assign start = employer.StartDate | date: "%Y" %}{% assign end = employer.EndDate | default : 'now' | date: "%Y" %}{% for year in (start..end) reversed %}
                {
                    "year":  {{ year }},
                    "projects":[
{% for project in employer.Projects %} {% assign projectStart  = project.StartDate | date : %Y | round %}{% if projectStart == year %}
                        {
                            
                            "Project":{{ project | jsonify }}
                        },    {% endif %}{% endfor %}
                    ]
                },
{% endfor %}]
        }
    },{% endfor %}];

