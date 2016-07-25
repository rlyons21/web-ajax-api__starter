# Weather Application

Your goal with this assignment is to use AJAX to consume an API.

You are provided with a static view that shows what information you'll need to display from the API. You must run this site from a server, like Apache, for AJAX to work properly. Once you're doing that, visit the `index.html` page to see what you're working with.

The page you'll see has placeholder content in it. Your task is to access an API with AJAX to replace the placeholder content with real data about a city of your choosing.

So the page will load, there might be a moment's wait while the API is accessed... And then right before the user's eyes, the content on the page will change to real values, as the response from the API is received.

Alter the HTML as needed to make it easier for you to select elements in the DOM (e.g. give elements `id` values if it makes your work easier).

Note: You will not be using an actual connection to the Forecast.io API for this assignment, as there are restrictions around using XHR to access external domains. Instead, your XHR object will make its request to `api`, which is a file contained in this assignment repo.

## Learning Outcomes

- Practice using AJAX to receive complex JSON responses
- Practice updating the DOM based on information from an API
- Deepen knowledge of JavaScript data structures like arrays and key-value pairs (a.k.a. "objects")