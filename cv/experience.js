function displayProjects(data) {
    var expPerMonth = [];
    for (var y = new Date().getFullYear(); y >= 2008; y--) {
        var currentYear = {
            year: y,
            months: [],
            allProjects : []
        };

        for (var m = 0; m < 12; m++) {
            var currentMonth = {
                month: m + 1,
                projects: []
            }
            data[0].Projects.forEach(function (project) {
                project.N = project.ProjectShortName || project.ProjectName;
                var startDate = new Date(Date.parse(project.StartDate));
                var endDate = new Date(Date.parse(project.EndDate));
                var shouldAddProject = false;
                if (startDate.getFullYear() <= y && endDate.getFullYear() >= y) {
                    if (startDate.getFullYear() == endDate.getFullYear()) {
                        //add once the projects for the specific year it started in the allProjets
                        if (m == 0)
                         allProjects.push(project);
                        if (startDate.getMonth() <= m && endDate.getMonth() >= m) {
                            shouldAddProject =true;
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
        expPerMonth.push(currentYear);
    }

    var maximumCountPerMonth = 0;
    expPerMonth.forEach(function (year) {
        year.months.forEach(function (month) {
            if (month.projects.length > maximumCountPerMonth)
                maximumCountPerMonth = month.projects.length;
        })
    });

    var arrayOfCount=[];
    for (var i = 0; i < maximumCountPerMonth; i++)
        arrayOfCount.push(i);


    ko.applyBindings({
        expPerMonth: expPerMonth,
        rawData: data,
        maximumCountPerMonth: maximumCountPerMonth,
        arrayOfCount: arrayOfCount
    });
}