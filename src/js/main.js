
var courses = [
	{
		title: "Sponge bob",
		link: "http://google.com"
	},
	{
		title: "Dracula"
	},
	{
		title: "Spiderman"
	},
    {
		title: "Pocaontas"
	},
	{
		title: "Homer Simpson"
	},
	{
		title: "Deine Mutter"
	}
];

function getLinkedTitle(title, link) {
	var courseTitle = title;
	if (link) {
		courseTitle = '<a href="' + link + '">' + title  + '</a>';
	}
	return courseTitle;
}

function displayCourseHtml(course) {
	var courseTitle = getLinkedTitle(course.title, course.link);
    var htmlStructure =
        '<tr>' +
            '<td>11EG-P</td>' +
            '<td>' + courseTitle + '</td>' +
            '<td>B.A. Fabian Moron-Zirfas, Prof. Myriel Milicevic </td>' +
            '<td>20.10.2016</td>' +
            '<td>03.02.2017</td>' +
            '<td>Donnerstag</td>' +
            '<td>wöchentlich</td>' +
            '<td>10:00-16:00</td>' +
            '<td>LW 226</td>' +
        '</tr>';
    var $elementToInjectIn = $('#results tbody');
    $elementToInjectIn.append(htmlStructure);
}

courses.forEach(displayCourseHtml);
