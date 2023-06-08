# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
YThe outermost element is a `<div>` with the class name "App". It serves as a container for the rest of the code.

Inside the `<div>`, there is an `<input>` element of type "text". It has a placeholder attribute set to "search...", which displays the text as a hint to the user.

The `<input>` element has an onChange event handler attached to it. Whenever the user types or modifies the text in the input field, this event handler will be triggered.

Inside the event handler function, the code is using the setSearchTerm function to update the value of a state variable (likely defined elsewhere in the component). The event.target.value represents the current value of the input field.

The code then uses the `filter()` method on Jsondata, which is presumably an array of objects, to filter the data based on the searchTerm.

The `filter()` method takes a callback function that is called for each element in Jsondata. It checks two conditions:

a) If searchTerm is an empty string, it returns all the elements, effectively displaying the entire list.

b) If searchTerm is not empty, it checks if the first_name property of the current element (converted to lowercase) includes the searchTerm (also converted to lowercase). If it does, the element is included in the filtered result.

The filtered array is then mapped over using the `map()` method. For each element `(val)` and its index in the filtered array, a `<div>` element with the `class name "name"` is rendered.

Inside the `<div>`, the val.first_name is displayed as the content of the element.

Each rendered `<div>` element is given a unique key prop using the index from the `map()` function. This helps React efficiently update and reorder the elements when necessary.

Overall, this code creates a search input field that filters a list of data (Jsondata) based on the first_name property. As the user types in the input field, the list dynamically updates to show only the elements whose first_name matches the entered search term.