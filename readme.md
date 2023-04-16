# SVG-Gen

SVG-Gen is a command-line tool that allows users to create a customized logo by responding to prompts.

## Installation

Before using this application, it is necessary to have Node.js installed on your system. If you don't have it yet, you can download it from https://nodejs.org/.

To install the application, clone this repository by running the following command:

bash
git clone https://github.com/griffinwoj/SVG-Custom.git

Next, install the required dependencies by running the following command:

bash
Copy code
npm install

### Usage
To use SVG-Gen, open a terminal and navigate to the directory where you cloned the repository. If you prefer a video tutorial, you can watch one at https://watch.screencastify.com/v/0ffs5CarLJqRBGtBNITt.

Once you're in the correct directory, run the following command to start the application:

bash
Copy code
node index.js
You will then be prompted to enter the following information:

Text (input up to three characters)
Text color (a color keyword or a hex number)
Shape (choose from a list of circle, triangle, or square)
Shape color (a color keyword or a hexadecimal number)
After entering all the required information, an SVG file named "logo.svg" will be created in the same directory. You will also see the output message "Generated logo.svg" in the command line.

To view the generated logo, open "logo.svg" in a browser or live server. You should see a 300x200 pixel image that matches the criteria you entered.

#### Contributing
The source code for SVG-Gen is based on modified code provided by edX, with additional modifications assisted by Juan Delgado. If you would like to contribute to this project, please submit a pull request on GitHub at https://github.com/griffinwoj/SVG-Custom.