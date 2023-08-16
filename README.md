# Learning Selenium with Node.js
This is the repository for the LinkedIn Learning course Learning Selenium with Node.js. The full course is available from [LinkedIn Learning][lil-course-url].

![Learning Selenium with Node.js][lil-thumbnail-url] 

You can control the browser using Selenium and Node.js, in order to address the challenges of functional web app testing. Most web apps are written using JavaScript, so it’s very convenient to use the same tech stack for creating your test suites. In this course, join principal quality engineer and testing instructor Alexandra Casapu and work directly with the tools to gain real, practical experience. Examine what kinds of tests are best done in Selenium. Learn Selenium functions for interacting with web elements, and explore ways to get comfortable wielding Selenium as a powerful engineering tool. Plus, find out how to make your Selenium code maintainable, deal with complex applications in Selenium, and apply what you’ve learned to a project.



## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	- [Node.js](https://nodejs.org/en/download), the latest LTS(Long Time Support) version. Some prefer to install it [via a package manager](https://nodejs.org/en/download/package-manager#installing-node.js-via-package-manager).
    - The [Chrome web browser](https://www.google.com/chrome/).
    - The [Webdriver for Chrome](https://chromedriver.chromium.org/downloads) corresponding to your Chrome browser version. Make sure the driver location is added to your `PATH` environment variable.
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. To install and run the `bread-shop` application(the app under test) locally on your machine, follow the instructions on the application's [README page](/bread-shop/README.md).
4. To install the dependencies for the tests project, run `cd bread-shop-tests` and then `npm install`.

## Running the Selenium tests

From the `bread-shop-tests` folder, run `npm test`.



### Instructor

Alexandra Casapu 
                            


                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/alexandra-casapu).

[lil-course-url]: https://www.linkedin.com/learning/learning-selenium-with-node-js?dApp=59033956&leis=LAA
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D560DAQGyqWEijCDaPw/learning-public-crop_675_1200/0/1692052747421?e=2147483647&v=beta&t=WKd1XT9JdQhmWXXdlLFDTO8fFff6gcZapcNzo1BGzsQ
