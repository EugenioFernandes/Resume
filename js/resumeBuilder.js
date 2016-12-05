var bio = {
	"name": "Antonio Manoel",
	"role": "Software Developer",
	"contacts": {
		"email": "antony.trino@gmail.com",
		"github": "Tony0000",
		"location": "Maceio, Alagoas, Brazil"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently undergraduating at Universidade Federal de Alagoas in Maceio, Alagoas, Brazil.  Thanks for stopping by!",
	"skills": ["Java", "C++", "Software Development", "Hardware Entushiast", "PC Master Race FTW"]
};

var work = {
	"jobs": [
		{
			"employer": "Universidade Federal de Alagoas",
			"title": "Research Scholarship",
			"location": "Maceio, Alagoas, Brazil",
			"datesWorked": "June 2015 - June 2016",
			"description": "My main job was to evaluate existing solutions to the problem of TSP applied to VM migration"+
			"in Clouds such as PlanetLab in different scenerios. And by the end, develop a possible framework or new policy"+
			"as a possible improvement to the algorithm."
		},
		{
			"employer": "Universidade Federal de Alagoas",
			"title": "Research Scholarship",
			"location": "Maceio, Alagoas, Brazil",
			"datesWorked": "July 2016 - July 2017",
			"description": "My role was to evaluate data from a Social Program, verify its integrity suffered from ."+
			"human factor, such as ill-filled data in the forms and also false data."
		},
		{
			"employer": "Receita Federal de Alagoas",
			"title": "Internship",
			"location": "Maceio, Alagoas, Brazil",
			"datesWorked": "April 2014 - April 2015",
			"description": "I worked with PC hardware repairing and assistance in network configuration and repair."
		}
	]
};

var education = {
	"schools": [
		{ "name": "Universidade Federal de Alagoas",
			"datesAttended": "2011 - 2017",
			"location": "Maceio, Alagoas, Brazil",
			"degree": "Bachelor Computer Science",
			"url": "http://www.ufal.edu.br/"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Developing Android Courses",
			"completed": "November 2016",
			"url": "https://www.udacity.com/courses/ud853"
		},
		{ "school": "Udacity",
			"title": "Android Basics: Multiscreen Apps",
			"completed": "October 2016",
			"url": "https://www.udacity.com/courses/ud839"
		},
		{ "school": "Udacity",
			"title": "Android Development for Beginners",
			"completed": "October 2016",
			"url": "https://www.udacity.com/course/ud837"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2015",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Intro to Statistics",
			"completed": "August 2016",
			"url": "https://www.udacity.com/course/st101"
		},
		{ "school": "Udacity",
			"title": "Responsive Web Design Fundamentals",
			"completed": "October 2015",
			"url": "https://www.udacity.com/course/ud893"
		},
		{ "school": "Udacity",
			"title": "JavaScript Basics",
			"completed": "August 2016",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to Statistics",
			"completed": "August 2016",
			"url": "https://www.udacity.com/course/cs253"
		},
		{ "school": "Udacity",
			"title": "Responsive Web Design Fundamentals",
			"completed": "October 2015",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "2D Game Development with libGDX",
			"completed": "August 2016",
			"url": "https://www.udacity.com/course/ud405"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Scheduler Simulator",
			"datesWorked": "January 2015",
			"description": "Created as project for Operating Systems class",
			"url": "https://github.com/Tony0000/SchedulerSim"
		},
		{
			"title": "CSV File Reader",
			"datesWorked": "October 2014",
			"description": "An CSV file parser to count null fields and watch list variables.",
			"images": ["images/filereader.jpg"],
			"url": "https://github.com/Tony0000/FileReader"
		},
		{
			"title": "Ant Colony",
			"datesWorked": "September 2016 - November 2016",
			"description": "Created as project for Artificial Intelligence class.",
			"url": "https://github.com/Tony0000/AntColony"
		},
		{
			"title": "Music Player",
			"datesWorked": "October 2016",
			"description": "Music player made in java as a hobby.",
			"images": ["images/musicplayer.jpg"],
			"url": "https://github.com/Tony0000/MusicPlayer"
		},
		{
			"title": "OpenGL Baseball Field 2D",
			"datesWorked": "September 2015",
			"description": "Created as project for Computer Graphics class.",
			"images": ["images/baseball.jpg"],
			"url": "https://github.com/Tony0000/OpenGL"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);


			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2016, 4], [2015, 10],[2014, 8], [2013, 6]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2014, 3],[2013, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2015, 6],[2013, 4], [2012, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2011, 8]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2015, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2015, 1],[2011, 2]]
			}]
	});
});


$("#mapDiv").append(googleMap);
