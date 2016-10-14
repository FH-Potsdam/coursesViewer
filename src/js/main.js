
var courses = [
	{
		studyCode: "21P-KD",
		title: "Projekt Kommunikationsdesign: Motion Standard.03: Das Dokumentarische im Animationsfilm",
		incomWorkspaceId: "6903",
		firstName: "Prof. Klaus",
		lastName: "Dufke",
		beginDate: "20.03.2016",
		endDate: "30.12.2016",
		days: "Mittwoch",
		dayOccurency: "wöchentlich",
		startTime: "10:00",
		endTime: "14:00",
		place: "LW219"
	},
	{
		studyCode: "23P-TD",
		title: "Identität, Information, Inszenierung: Visuelle Gesten der Beteuerung",
		incomWorkspaceId: "6953",
		firstName: "Prof. Constanze",
		lastName: "Langer",
		beginDate: "17.03.2016",
		endDate: "35.12.2016",
		days: "Dienstag",
		dayOccurency: "täglich",
		startTime: "11:00",
		endTime: "17:00",
		place: "D103"
	}
];
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
};
function getBeginDate(date) {
	var beginDate = date;
	return beginDate;
};
function getEndDate(date) {
	var endDate = date;
	return endDate;
};
function getDays(day) {
	var days = day;
	return days;
};
function getDayOccurency(occury) {
	var occurency = occury;
	return occurency;
};
function getTime(start, end) {
	var fullTime = start;
	if (end) {
		fullTime =  '<p>' + start + " - " + end + '</p>';
	}
	return fullTime;
};
function getPlace(place) {
	var fullPlace = place;
	return fullPlace;
};


function displayCourseHtml(course) {
    var htmlStructure =
        '<tr>' +
            '<td>' + getStudyCode(course.studyCode) +'</td>' +
            '<td>' + getLinkedTitle(course.title, course.incomWorkspaceId) + '</td>' +
            '<td>' + getFullName(course.firstName, course.lastName) + '</td>' +
            '<td>' + getBeginDate(course.beginDate) + '</td>' +
            '<td>' + getEndDate(course.endDate) +'</td>' +
            '<td>' + getDays(course.days) + '</td>' +
            '<td>' + getDayOccurency(course.dayOccurency) + '</td>' +
            '<td>' + getTime(course.startTime, course.endTime) + '</td>' +
            '<td>' + getPlace(course.place) + '</td>' +
        '</tr>';
    var $elementToInjectIn = $('#results tbody');
    $elementToInjectIn.append(htmlStructure);
}

courses.forEach(displayCourseHtml);
