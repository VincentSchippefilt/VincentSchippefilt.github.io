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
{% for project in employer.Projects %} {% assign projectStart  = project.StartDate | date : %Y | round %}{% assign projectEnd  = project.EndDate | date : %Y | round %}{% if projectStart <= year and projectEnd >= year  %}{% assign monthStart  = project.StartDate | date : "%m" | round %}{% assign monthEnd  = project.EndDate | date : "%m" | round %}{% assign nbMonth =  monthEnd | minus: monthStart | plus: 12 | modulo: 12 %}
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

{% assign curly = '}' %}
{% assign quote = '"' %}

var rawData = [
    {% for employer in site.data.exp %}    {
         "Company": "{{ employer.Company }}",
        "StartDate": "{{ employer.StartDate }}",
        "EndDate": "{{ employer.EndDate }}",
        "Projects": [
        {% for project in employer.Projects %}  
{% capture color%}{% cycle 'year': '#4E7297' , '#499B80' , '#5E58A2' ,  '#E8B76E' , '#83A0BE' , '#80C0AB' , '#918DC6' , '#FFDDA9' %}{% endcapture %}
            {{ project | jsonify | replace: curly , " " | append: ", " | append: quote | append: "color" | append: quote | append: ":" | append: quote | append: color | append: quote | append: curly }},
        {% endfor %}     
        ]
    },{% endfor %}];
