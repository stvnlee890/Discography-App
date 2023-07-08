# Search your favorite Artist

I have developed a music discography application using React and the Discogs API. This application allows users to search for their favorite artists and explore detailed information about them. The main feature of the app is the search functionality, which enables users to enter the name of the musician they are interested in. The app then displays multiple search results based on the user's input.

Once the search results are displayed, users can click on the cover images of the artists to access more information about them. This information includes details about their discography, albums, singles, and other relevant data provided by the Discogs API.

The primary goal of this application is to provide music enthusiasts with a convenient way to learn more about their favorite artists. By leveraging the Discogs API, users can access comprehensive and up-to-date information about musicians, empowering them to discover new music and delve deeper into their musical interests.

Overall, this music discography application offers an intuitive and user-friendly interface that enhances the music exploration experience, making it enjoyable for users to dive into the world of their beloved musicians.

<img width="1012" alt="Screen Shot 2022-07-22 at 12 53 06 AM" src="https://user-images.githubusercontent.com/106281820/180391767-e6f193ea-dc7a-4257-bed2-fde0dff85131.png">

Here's a the link to my app
https://music-discography.netlify.app 

## MVP GOALS 

1.	Create an input field that will fetch the specified artist from the Discogs API.
2.	Be able to click on artist poster so the page can route the user directly to the artist profile page an display their information.
3.	Display multiple artists that match the keyword user inputs.
4.	Have a simple nav bar that can take users to the home page and results page through the input field. 

# Wireframes
<img width="745" alt="Screen Shot 2022-07-14 at 10 37 22 PM" src="https://user-images.githubusercontent.com/106281820/180392064-302b8ce5-0edf-4b65-8780-f7393caf3b7c.png">
<img width="727" alt="Screen Shot 2022-07-14 at 10 37 46 PM" src="https://user-images.githubusercontent.com/106281820/180392078-9bf10b21-9004-42a9-a585-5ebd6330becc.png">
<img width="725" alt="Screen Shot 2022-07-14 at 10 38 04 PM" src="https://user-images.githubusercontent.com/106281820/180392092-8dab6e3f-bb50-472e-b48b-60e7ea89f50a.png">
<img width="996" alt="Screen Shot 2022-07-14 at 10 55 19 PM" src="https://user-images.githubusercontent.com/106281820/180392100-bf26a2df-009b-4cbb-94c7-e1d43e78b1b2.png">


# Technologies 

This application was created using React and the Discogs API. 

# Installation

1. You can `fork` and `clone` this repository.
2. `cd` into `Discography-App`.
3. Run `npm i` to install necessary dependencies.
4. Create a `.env` file in the root directory.
5. Create a discog account for an API Key and Secret. [link](https://accounts.discogs.com/login?login_challenge=924d182e38a3448ab6501866ef2baf24)
6. Inside the `.env` file create a `REACT_APP_ACCESS_TOKEN` and `REACT_APP_DISCOG_SECRET` variable to store the token and secret respectively.
7. Feel free to play with the code!

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
