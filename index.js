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