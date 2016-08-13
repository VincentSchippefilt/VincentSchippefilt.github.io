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
{% for project in employer.Projects %}    
{% assign projectStart  = project.StartDate | date : %Y | round %}
{% assign projectEnd  = project.EndDate | date : %Y | round %}
{% if projectStart <= year and projectEnd >= year  %}
{% assign monthStart  = project.StartDate | date : "%m" | round %}
{% assign monthEnd  = project.EndDate | date : "%m" | round %}
{% assign nbMonth =  monthEnd | minus: monthStart | plus: 12 | modulo: 12 %}
                        {
                            "NbMonth": 
                            {% if nbMonth == 0 %} 1 {% else %}{{ nbMonth }}{% endif %},
                            "MonthtStart": "{{ project.StartDate }}" ,
                            "MonthEnd": "{{ project.EndDate }}" ,
                            "NbMonthPercentage" :  {{ 100.0 | divided_by: 12 | times: nbMonth | round }}, 
                            "Project":{{ project | jsonify }}
                        },    {% endif %}{% endfor %}
                    ]
                },
{% endfor %}]
        }
    },{% endfor %}];