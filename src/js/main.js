var courses = [];

$.ajax('https://coursesapi.herokuapp.com/courses')
    .done(function(response) {
        courses = response.data || response;
				courses.forEach(displayCourseHtml);
    })
    .fail(function(err) {
        console.log(err);
    });

function getStudyCode(code) {
	var studyCode = code;
	return studyCode;
};
function getLinkedTitle(title, link) {
	var courseTitle = title;
	if (link) {
		courseTitle = '<a href="' +'https://incom.org/workspace/'+ link + '">' + title  + '</a>';
	}
	return courseTitle;
};
function getFullName(first, last) {
	var fullName = last;
	if (first) {
		fullName =  '<p>' + first + " " + last + '</p>';
	}
	return fullName;
}
function getCredits(cred){
	var credits = cred;
	return credits;
}
function getPlace(place) {
	var fullPlace = place;
	return fullPlace;
};


function displayCourseHtml(course) {
    var htmlStructure =
        '<tr>' +
            '<td>' + getStudyCode(course.studyCode) +'</td>' +
            '<td>' + getLinkedTitle(course.title, course.incomWorkspaceUrl) + '</td>' +
            '<td>' + getFullName(course.firstName, course.lastName) + '</td>' +
						'<td>' + getCredits(course.credits) + '</td>'
            '<td>' + getPlace(course.locations) + '</td>' +
        '</tr>';
    var $elementToInjectIn = $('#results tbody');
    $elementToInjectIn.append(htmlStructure);
}
