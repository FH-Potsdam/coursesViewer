var courses = [];

$.ajax('https://coursesapi.herokuapp.com/courses?limit=1000')
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
		courseTitle = '<a href="' + link + '">' + title  + '</a>';
	}
	return courseTitle;
};
function getFullName(teachersarray) {
	var teacher = teachersarray.length ? teachersarray[0].fullName : '';

	return teacher;
}
function getCredits(cred){
	var credits = cred;
	return credits;
}
function getDescription(descr){
	var description = descr;
	return description
}

function displayCourseHtml(course) {
    var htmlStructure =
        '<tr>' +
            '<td>' + getStudyCode(course.studyCode) +'</td>' +
            '<td>' + getLinkedTitle(course.title, course.incomWorkspaceUrl) + '</td>' +
            '<td>' + getFullName(course.teachers) + '</td>' +
						'<td>' + getCredits(course.credits) + '</td>' +
            '<td>' + getDescription(course.description) + '</td>' +
        '</tr>';
    var $elementToInjectIn = $('#results tbody');
    $elementToInjectIn.append(htmlStructure);
}
