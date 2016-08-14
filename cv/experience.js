function displayProjects(data) {
    var years = [];
    for (var y = new Date().getFullYear(); y >= 2008; y--) {
        var currentYear = {
            year: y,
            months: []
        };

        for (var m = 0; m < 12; m++) {
            var currentMonth = {
                month: m + 1,
                projects: []
            }
            data[0].Projects.forEach(function (project) {
                var startDate = new Date(Date.parse(project.StartDate));
                var endDate = new Date(Date.parse(project.EndDate));
                var shouldAddProject = false;
                if (startDate.getFullYear() <= y && endDate.getFullYear() >= y) {
                    if (startDate.getFullYear() == endDate.getFullYear()) {
                        if (startDate.getMonth() <= m && endDate.getMonth() >= m) {
                            shouldAddProject = true;
                        }
                    }
                    else {
                        if (startDate.getFullYear() == y && startDate.getMonth() <= m)
                            // the project starts the year y
                            shouldAddProject = true;

                        else if (endDate.getFullYear() == y && endDate.getMonth() >= m)
                            // the project ends the year y
                            shouldAddProject = true;
                        else
                        if (startDate.getFullYear() != y && endDate.getFullYear() != y)
                            // the project neither starts nor ends the year y, so it runs the full year
                            shouldAddProject = true;
                    }
                }
                if (shouldAddProject)
                    currentMonth.projects.push(project)
            });

            currentYear.months.push(currentMonth);
        }
        years.push(currentYear);
    }
    ko.applyBindings(years);
}