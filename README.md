# Diplom Portal :rocket:

#### Prerequisite:
Node.js 14 or above installed on machine.

#### Getting started:
Clone this project to your system. In the project directory, you should run below commands.

Get necessary packages and install to run the project :arrow_down:
### `npm install`

Start project en development mode :running:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Application is ready to be deployed!

From Node.js you can run below commands (Execution policy should not be restricted):
### `npm install -g serve`
### `serve -s build`

From Docker:

```docker run -d --name diplomportal -p 8080:80 -v path_to_project_\build:/usr/share/nginx/html nginx```

Where path_to_project is the absolute path of the project root. Docker image will be available soon.

From NGINX:
#### Move the content of build files in to html folder where NGINX serves pages.

The code could be developed further with adding features such as weather reports and calendar. Courses listed on the site are received from [https://raw.githubusercontent.com/VolkanIsik86/dummydata/main/courses.json]() and can be used for testing purposes. 