# Atlan SQL Frontend Task 💼

> Deployed: [https://atlan-sql.herokuapp.com/](https://atlan-sql.herokuapp.com/)

A web-based React application frontend capable of submitting SQL queries and displaying the results of said query. The application includes a space which accepts SQL queries in the form of user inputs, then displays the result within the application.

This application also have tabs for multiple query pages so that user can work on multiple queries at the same time.

## Tech Stack

- Javascript Framework: [**React**](https://reactjs.org/)
- Uses [**CSS modules**](https://css-tricks.com/css-modules-part-1-need/) for styling
- Uses [**D3-fetch**](https://github.com/d3/d3-fetch) to parse CSVs
- Uses [**Codemirror**](https://codemirror.net/) to integrate a code Editor with autocompletion

## Page Load Time: 600ms

> Measured the Page Load time of Deployed app with Chrome Dev Tools's Performance tab.

![](https://user-images.githubusercontent.com/34980034/174268056-03a675ab-aca3-4829-b66a-d7a9333d0c23.png)

## Imporovements on load time

- By selective rendering rows of the result table, load time reduced by over 8 seconds.
- In a full stack application we can achieve even more better load time by using paging for the result query.
