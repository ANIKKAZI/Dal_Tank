# DAL TANK

The project contains the UI of a functionality for the web-application call DAL TANK.The application serves as a platform for enrtrepenuers to share their business ideas and the correspoding details. On the other hand another user type for the application are the Investors who go through the business ideas posted by the former user type and in case of their intrest they can reach out the respective entrepenuers. The UI illustrates on such page in which the Entreppenur is needed to filled the required details

- _Date Created_: 23st May, 2023
- _Last Modification Date_: 27th May, 2023
- _Assignment URL_: <https://dal.brightspace.com/d2l/lms/dropbox/user/folder_submit_files.d2l?db=186582&grpid=0&isprv=0&bp=0&ou=274269>
- _Git URL_: <https://git.cs.dal.ca/akazi/csci-5709-assignments/-/tree/main/assignment_1>

## Authors

Kazi Aniketh Anum (an584274@dal.ca)

## Workflow

The workflow followed for this tuotiral uses the Gitlab repositories provided to us by the Dalhousie University and our personal Github repository. The process steps are mentioned as followed.

1. I have gone ahead and created the Gitlab repository based on the format provided in the tutorial handout and the main branch of this repository will be containing the source code for our React App. After creating the reporsitory

2. On completion of the previous step we create a boiler plate ReactApp . In ordfer to create this Application we need to install Node.js in our system .Following this we create a local directory where we will create our application .We navigate to our project folder and execute the following commands.

- npx create-react-app app_name
- cd app_name

3. On completion of Step 2 we will have the boilerplate code set for our React app . We are in the current directory of our application and we can use the following command to run this application on our local system.

- npm start

4. After the boiler plate application is running I have then created a react functional component called _Traction.js_

5. The content of this functional component are put in a heirarchy manner

- the logo of the application helping a user visualize the theme of the application
- The description which states what is the broader topic to which the details is being collected
- three required input fields in order to caputre the traction and the progess details of the idea proposed by the Enterpenuer.

6. We have two button. One button allows to navigate to the next page on succesful completion of the required fields and the other is a back button which allows the user to return to the previous screen.

7. We have required validation set for the three input fields and in case the user tries to proceed without completing the required attributes then the system prompts the message of _Please fill this field_ message

8. ALl the form elements and the buttons are put in a single main box to keep them in close proximity and these entites all share the same font and color to show the interrelation , coherence. They are also kept in size and design to show the user these eentities are united to each other and demonstrate symmetry .

9. The color theme for the application is kept in dark puprle _rgb(32 48 100)_ as same as the logo because it helps the user to focus on the content of the page more clearly which are kept in the yellow color _rgb(235 189 80)_ . As purple is a symbol of trust and the yellow indicates innovation and these are the two important functional principle of Dal Tank that is to suport and ensure trust among Entrepeneurs about their innovation. The investors who will also be referring to this platfrom would have trust in acquiring ideas which will help them uplift their business.

10. There is texture difference from the header and the form element to help distinguish the two sections independantly
11. Once succesfully validated that our application is running on our local system we can commit and push our changes in our remote Gitlab and Github repositories respectively.

12. The Github repository which contains the committed code is then used to link with Netlify . We configure the Netilfy corresponding to this github repository and we set the base directory in Netlify from where it will fetch the code to create the build and run the build. Once the build is succesful then Netlify goes ahead and launches the application.

- _Url of the hosted application_ : <https://6471878a12cf413320a843af--iridescent-starship-36db86.netlify.app/>

## Deployment

The deployment process involves four steps as mentioned.

1. Commit and push the code changes in the remote-repository in Github .
2. Link the development site in Netlify with the remote-repository.
3. Set the build configuration that is the path for the code to be built from and the build command
4. On succesful build use the generated link to view the hosted application.

## Built With

- [React.js](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [CascadingStyleSheet](https://legacy.reactjs.org/docs/faq-styling.html) - Styling
- [Netlify](https://app.netlify.com/) - Front-End built and hosted.

## Sources Used

[1] Bacancytechnology.com. [Online]. Available: https://www.bacancytechnology.com/blog/deploy-react-app-on-netlify-using-github. [Accessed: 24-May-2023].
[2] “Log in - Wireframe.cc Premium,” Wireframe.cc. [Online]. Available: https://wireframe.cc/pro/. [Accessed: 27-May-2023].
[3] Looka.com. [Online]. Available: https://looka.com/dashboard. [Accessed: 27-May-2023].

## Assignment Gitlab Repository URL

[assignment_1] - https://git.cs.dal.ca/akazi/csci-5709-assignments/-/tree/main/assignment_1
