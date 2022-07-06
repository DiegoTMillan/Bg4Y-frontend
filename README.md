# Bg4Y-backend :computer:
Boardgames 4 you Frontend.\
This is only the front of a bigger project. Here is the URL of the other repository:
  ### Bg4Y-frontend
  ```
  https://github.com/DiegoTMillan/Bg4Y-backend.git
  ```

## Presentation :green_book:
Hi everyone. I am Diego Tapia and this is my final project Boardgames 4 you. Although there are many different areas, probably more insteresting.
It's a fact that I am an authentic fanatic of boardgames.
Indeed I am full motivated because I want to share something really special with everyone, just make by myself.

## Get Start :arrow_forward:

If you want to see my project in your computer, please, follow this steps:

  1. ### Requirements

Please check that apache and NPM is fully installed and operating

  2. ### Install

  - React

We are going to create a new project

```
 npx create-react-app folderName
```

Once, the project has been created. We have to make a pull from this repository:
```
https://github.com/DiegoTMillan/Bg4Y-backend.git
```

 3. ### Adding tools


Now we have to install redux, , @reduxjs/toolkit, axios and router-dom

```
npm install react-redux @reduxjs/toolkit axios  react-router-dom
```

4. ### Make it function

And now if you want to see it in the screen:

```
npm start
```

## Basic Structure :bookmark_tabs:

React was the choice for the frontend because it was one of the objetives of the project. Obviously, it's an incredible tool and very popular.

  1. ### index.js

  - This is the structure of most important components.

```
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Banner/>
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
```
  2. ### Breakpoints

in this project, we had to use at least three differents breakpoints. Almost we were required to use only three, indeed, in my components i have used 4 or even more.

- A table with most commons breakpoints:

|SIZE|DEVICE|
|---|---|
|under 526px|Mobile|
|under 768px|Mobile|
|under 992px|Tablet|
|under 1200px|Screen|
|more than 1200px|Large screen|

  3. ### Login and Register

This is the heart of the front and I decided to use loginSlice for async requirements.\
Here is a litte example from loginSlice.js:

```
export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(loginURL + "/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to register a new user");
    }
  }
);
```

   4. ### Folder structure

As you can see, there are a folder with all components. Indeed, inside each folder there are a js and a css file.\
On the other hand there is another folder with all pages with the same structure.



