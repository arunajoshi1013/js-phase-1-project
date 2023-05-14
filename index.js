/* Global var to store the fetched data */
let fetchedData;

function showChosenWords(event) {
	event.preventDefault();

	if (event.type === "submit") {
		const tagElem = document.getElementById("tag");
		const tagVal = tagElem.options[tagElem.selectedIndex].value;

		/* Use Array filter method to get all the words that contain the specified tag */
		const filteredData = fetchedData.filter( tagMatcher => tagMatcher.tags.includes(tagVal));

		/* Create an Unordered list and add each word as a list item */
		let ul = document.getElementById("ulist");
		ul.innerHTML = "";
		ul.innerText = "Here's the list of all " + tagElem.options[tagElem.selectedIndex].textContent + "s, hover to see the word score";

        /* Use Array forEach to iterate over all the words and create a list item out of them */
		filteredData.forEach(element => {
			let li = document.createElement('li');
			let li_child = document.createElement('li');
			li.innerText = element.word;
			li.className = 'mousehover';
			li.style.width = "72px";

			/* Create a child element to store the word score that will be displayed on a mouseover event */
			li_child.innerText = element.score;
			li_child.style.display = 'none';
			li_child.id = element.word;
			li.appendChild(li_child);
			ul.appendChild(li);
		});
	}
}

function wordFilter(data) {
	/* Populate the global fetchedData var */
	fetchedData = data;

	/* First Event listener that acts on a submit event */
	const submitForm = document.getElementById("tagform");
	submitForm.addEventListener("submit", showChosenWords);

    /* A Mouseover event will make the word score element visible */
	document.getElementById("ulist").addEventListener("mouseover", function(e) {
        if (e.target && e.target.matches("li.mousehover")) {
			if (e.type === "mouseover") {
				const child = e.target.children[0];
				child.style.display = 'block';
				child.style.color = 'red';
				child.style.fontStyle = "italic";
			}
		}
	});
}

/*
 * It all begins here. Try to fetch words from the URL below.
 * If that fails, for some reason, then try the JSON server.
 * Pass the data on to the wordFilter function.
 */
fetch("https://api.datamuse.com/words?ml=ringing+in+the+ears")
.then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		console.log("Try JSON server")
		fetch("http://localhost:3000/words")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return wordFilter(data);
		})
	}
})
.then(function (data) {
	return wordFilter(data);
});