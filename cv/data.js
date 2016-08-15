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
