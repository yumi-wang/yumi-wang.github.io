document.getElementById('heading1').innerHTML =
  'JavaScript and its relationship to HTML and CSS'
document.getElementById('para1-1').innerHTML =
  'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are two critical technologies for building Web pages. HTML provides the structure of the page, and CSS is in charge of the style and layout. Think HTML is like kitchen appliances sketch, simple, black and white. CSS can decorate the drawing, making it colourful and delightful. But at this point, the appliances are still pictures without actual functioning.'
document.getElementById('para1-2').innerHTML =
  'JavaScript is the programming language of the Web. It can help to enhance the user experience interacting with web pages. It determines what happens when users click, hover or type within certain elements. JavaScript brings HTML and CSS to life. It is the REAL functioning kitchen appliances based on the draft. Rice cookers can make rice, blenders can make smoothies, and jugs can boil water, etc.'

document.getElementById('heading2').innerHTML = 'Control flow and Loops'

document.getElementById('para2-1').innerHTML =
  'In computer programming, control flow is the order function calls, instructions, and statements are executed or evaluated when a program is running. Code is run in order from the first line in the file to the last line, unless the computer is told to run across the (extremely frequent) structures that change the control flow, such as conditionals and loops. '
document.getElementById('para2-2').innerHTML =
  'Control flow is like going to school. Generally speaking, students need to start from year 1 to year 13 instead of going to year 6 first and then jumping back to year 2. Decision-making will also be involved in terms of choosing subjects as it will lead you on different paths. '
document.getElementById('para2-3').innerHTML =
  'The example below shows how the computer executes the code from top to bottom, printing the sentences one by one, and each statement will start in a new line.'
document.getElementById('para2-4').innerHTML =
  'Loops are used to run repeated processes until a certain criteria is met. For instance, students will need to pass all the exams to graduate. If a person has one or more failed course(s), he/she will need to take it/them over and over again until passing all of the tests to be able to graduate. '
document.getElementById('para2-5').innerHTML =
  `The following example will explain how loop works. Inside the bracket after the while key work, is the condition. If the student_score doesn't meet the condition, the while loop will go on again until student_score is equal to or more than 50.`

document.getElementById('heading3').innerHTML = 'The DOM'
document.getElementById('para3-1').innerHTML =
  'The DOM (Document Object Model) is an application programming interface (API) for web documents. When a web page is loaded, the browser creates a Document Object Model of the page. By DOM manipulation we can add, change and remove any HTML elements or attributes and CSS styles associated with it.'
document.getElementById('para3-2').innerHTML =
  'But how exactly does DOM manipulate the elements? Well, elements in web documents can be pictured as family trees. If you have not already known, a basic HTML structure looks like this:'
document.getElementById(
  'para3-3'
).innerHTML = `From the perspective of DOM, it sees web documents as family trees. DOM can access the web documents' elements by their tags (as the example shows), ids, and classes, etc.`
document.getElementById('para3-4').innerHTML =
  'We can manipulating the document-object from console. Open a webpage and press F12 to open the developer tools and go to console. The page will look like this:'
document.getElementById('para3-5').innerHTML = `In the console, we type in 
  <br /> > <span id="text-highlight">document.querySelector('p').innerHTML = "This is how we manipulate DOM!"</span>
  <br />And then press enter. You can see the paragraph contents changed to what we put in the console.`
document.getElementById('para3-6').innerHTML =
  `If we go further into the command lines, the <span id="text-highlight">document</span> represents the Document Object. When you load an HTML document in a browser, it is converted into a document object. We can access the document object by typing document into the Console-tab as we did before. `
document.getElementById('para3-7').innerHTML =
  `The Document method <span id="text-highlight">querySelector('p')</span> returns the first Element within the HTML document that matches the specified selector, or group of selectors. As we only have one paragraph sector in the document, this paragraph will be returned.`
document.getElementById('para3-8').innerHTML = `The <span id="text-highlight">innerHTML</span> is a property of the Element that allows you to get or set the HTML markup contained within the element. It can simply be understood as "changing the text in the selected sector". As we have already locked in the paragraph within the HTML document. To manipulate the content, we only need to assign the new text with <span id="text-highlight">= "This is how we manipulate DOM!"</span> `
document.getElementById('para3-9').innerHTML = `If you want to try it out, changing the background color of the page. Open the developer tools (F12) and in the console, type in: 
 <br />> <span id="text-highlight">document.body.style.backgroundColor = '#7D6F86'</span>. Now let see how it goes!`

document.getElementById('heading4').innerHTML = 'Arrays and Objects'
document.getElementById('para4-1').innerHTML =
  "Arrays are uesed to store a collection of multiple items under a single variable name. We use square brackets [] to wrap around the items. Say we have an array called 'fruits' in the array, we have coconut, watermelon, and peach. The array will look like this:"
document.getElementById('para4-2').innerHTML = `The fruits are stored in a numbered order, and the index starts from 0. So if we want to call out coconut, we use fruits[0] to get it. Because the index of the first item is 0, and the index is wrapped in the square brackets [].`
document.getElementById('para4-3').innerHTML = `An object is another data type in JavaScript. It is used to store keyed collections of various data and more complex entities. The collections are stored within figure brackets {}, and comma "," is used to separate each collection. They are like business cards. We can store different categories of data in each object. For instance:`
document.getElementById('para4-4').innerHTML = `How about accessing properties on the Object? We can access the property values by their property names/keys. There two ways: dot notation and bracket notation:`
document.getElementById('para4-5').innerHTML = `Remember to use quotation marks in the brackets when you are using the bracket notation. Otherwise, you will get an undefined error. However, if you assign a property name to a new variable, quotation marks are not needed as we are accessing the value via a variable name instead of a string. `
document.getElementById('para4-6').innerHTML = `Another thing to note is if the property names are two separate words, we can only use bracket notation to access the value.`

document.getElementById('heading5').innerHTML = 'Functions'
document.getElementById('para5-1').innerHTML =
  "Function is a block of code that can be used over and over again. Imagine you are working in a food box factory line. You are asked to put ingredients 1, 2, and 5 in a box when people order meal A. Ingredients 2, 6, 7, and 9 for meal B. It is tiring and easy to make mistakes. So you decide to program a robot to work for you. When the robot sees the meal's name, it automatically goes to the ingredients locations accordingly and takes one each. Now you can just sit back, have a cup of tea, call the robot, and watch it work for you."
document.getElementById('para5-2').innerHTML = `The example shows how function is defined and called.`
