##SVG-Gen
By responding to certain prompts, you can create a logo using this command-line tool.

##Installation
To use this application, you must have Node.js installed on your system. You can download it from https://nodejs.org/
To install the application, clone this repository:

bash
Copy code
git clone https://github.com/
Install the required dependencies:


Copy code
npm install

##Usage
To run the application, open a terminal and navigate to the directory where you cloned the repository. 
If you prefer to follow a video tutorial, you can view one here: https://watch.screencastify.com/v/0ffs5CarLJqRBGtBNITt

Then, run the following command:

open gitbash, not powershell (for those on windows)
Copy code
node index.js
This will start the application, and you will be prompted to enter the following:

Text (input up to three characters)
Text color (a color keyword or a hex number)
Shape (choose from a list of circle, triangle, or square)
Shape color (a color keyword or a hexadecimal number)
Once you have entered all of the required information, an SVG file named logo.svg will be created in the same directory, and you will see the output message "Generated logo.svg" in the command line.

To view the generated logo, open logo.svg in a browser or live server. You should see a 300x200 pixel image that matches the criteria you entered!

##Contributing

All files are from modified source code provided from edX as well as additional modifications assisted with help from Juan Delgado.  
 [(https://github.com/