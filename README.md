# js-phase-1-project
SD Phase 1 Javascript project

This is Aruna Joshi's Phase 1 JavaScript project.

What it does ?
-   This is a simple app, that fetches words from a public API - https://api.datamuse.com/words?ml=ringing+in+the+ears
-   These words come with a tags attribute, that specifies all the parts of speech of that word such as: n, adj, adv, v
-   They also come with a score attribute.
-   The app presents the user with a dropdown that lists 4 choices - Noun, Adjective, Verb and Adverb, along with a Submit button.
-   Depending on what the user chose, the app will update the HTML page with all the words (returned from the server) that have the tag.
-   A backup option to fetch data from JSON DB server is also provided in case the remote server is not up.

How it works ?
-   The app uses the fetch() API to fetch and process the array of words received from the server.
-   It then filters out the words that do not have the tag specified by the user
-   There are Three event listeners that listen to - Submit, Mouseover and Mouseout events.
