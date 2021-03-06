var courses = [];

$.ajax('https://coursesapi.herokuapp.com/courses?limit=1000')
	.done(function(response) {
		courses = response.data || courses;
		courses.forEach(displayCourseHtml);
	})
	.fail(function(err) {
		console.error(err);
	});

function getStudyCode(code) {
	var studyCode = code;
	return studyCode;
}

function getLinkedTitle(title, link) {
	var courseTitle = title;
	if (link) {
		courseTitle = '<a href="' + link + '">' + title  + '</a>';
	}
	return courseTitle;
}

function getFullName(teachersarray) {
	var teacher = teachersarray.length ? teachersarray[0].fullName : '';

	return teacher;
}

function getCredits(cred) {
	if (!cred) return '–';
	return cred;
}

function getDescription(desc) {
	return desc;
}

function displayCourseHtml(course) {
	$('#results tbody').append(
		'<tr>' +
			'<td>' + getStudyCode(course.studyCode) +'</td>' +
			'<td>' + getLinkedTitle(course.title, course.incomWorkspaceUrl) + '</td>' +
			'<td>' + getFullName(course.teachers) + '</td>' +
			'<td>' + getCredits(course.credits) + '</td>' +
			'<td>' + getDescription(course.description) + '</td>' +
		'</tr>'
	);
}
