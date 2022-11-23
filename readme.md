# Comments
There are many ways to structure the code. As this was a fairly simple application, and no sign of a larger backlog :), I used a much flatter structure for screens, components etc. For medium/large projects I tend to use a feature based folder structure which in theory can be broken down further (but depends on the project and existing code base).

- I would've used IoC or some form of injection inside the app for services.
- If I had time, I would've liked to split the api calls (via the client) into separate services and started to split the data into different layers (for example, presentation, service, and DTOs). As well as tidying up my actions and reducers.
- I started using RTK codegen to generate hooks for the api until I stumbled on a good and maintained client for TMDB (hard to find as wasn't on the website) and most results were stale), and proceeded to switch over. I would then start mocking this in the tests.
- Always can improve on the testing, I started to test first but started to run out of time.
- Better error handling, debouncing and caching of data (as used redux, so should use the powerful tool as much as a I can). Started to touch on these items but I ran out of time.
- Split out styling.

**Many more things...** Being realistic though, as we don't have unlimited time, my first focus would be to improve between the api and service layer mainly; then focus on fancy UI aspects. If I can get my error handling, caching, debouncing etc being smooth and responsive, the UI will start to feel much better anyway. Then I can work out cool animations.

### Why Expo?
I really like Expo to get off the ground quickly, as well as for testing and using their universal Apis. There are limitations, but the gap is very small as you can use native android/ios inside too now.

### Why Redux?
I find even in the short run, if I am working with data I will always use some form of state management (and Redux comes with a lot more via TK).

# FikaSearch Exercise

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres. The page should also allow the user to search the films by typing into a text field.

We expect you to have an understandable structure, clean code, and to be able to describe your next steps in any aspects of the challenge you arent able to complete in a few of hours.

## Technical details

### API
You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false](https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false)

movies search - [https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=searchterm](https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=shrek)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**
