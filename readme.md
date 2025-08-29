### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? <br>
    Ans: Basically, getElementById, getElementsByClassName, querySelector, and querySelectorAll are JavaScript methods used to select and retrieve HTML elements from the Document Object Model (DOM). The differences between them are given below:-
    1. **getElementById** : By using this methos we can select a HTML element using its unique id. We can select only single HTML element from DOM using that Javascript method. But It must have a unique id.

    2. **getElementsByClassName** : We are known about class in CSS. We can use a specific class in multiple HTML elements. By using this method we can select all of them with that class name. It returns a HTMLCollection.

    3. **querySelector** : This method used to select a first element that matches a given CSS selector. We can target any element by targeting its l id-name, class-name also tag name. If we use a single class name in a several element. From these elements That method select only first element.

    4. **querySelectorAll** : It select all elements that matches a given CSS selector or tag name. Basically it returns a static NodeList.**

2. How do you **create and insert a new element into the DOM**? <br>
    We can create a new element by using createElement() method in Javascipt file. Then we insert this element in DOM to use appendChild() method. Now I am showing what does it looks like:-
    ```<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Creating Element</title>
        </head>
        <body>
            
            <script>
                const title = document.createElement("h3");
                title.innerText = "Hello Pragramming Hero";
                document.body.appendChild(title);
            </script>
        </body>
        </html>
    ```
3. What is **Event Bubbling** and how does it work? <br>
    Ans: Event bubbling is a method of the DOM where an event on an element first works on that element and then progressively travels up through its parent elements to the root of the DOM. It flows from the bottom up like a bubble, which is why it's called **Event Bubbling.**

    Now I am showing how its work:-
    ```
                <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Creating Element</title>
        </head>
        <body>
            <div id="order-list">
                <ol id="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li id="js">Javascript</li>
                    <li id="MongoDB">MongoDB</li>
                </ol>
            </div>
            <script>
                document.getElementById("order-list").addEventListener("click", function() {
                    console.log("Main Container")
                })
                document.getElementById("list").addEventListener("click", function() {
                    console.log("hello list")
                })
                document.getElementById("js").addEventListener("click", function() {
                    console.log("hello JS")
                })
                document.getElementById("MongoDB").addEventListener("click", function() {
                    console.log("Hello MongoDB")
                })
            </script>
        </body>
        </html>
    ```
    **Output**
    1. HTML
    2. CSS
    3. Javascript
    4. MongoDB

    When I click on the MongoBD in list, the click event happens on that box first then, the event "travels up" to the parent of this list which is ol tag.And the event happens there too. Finally, the event "travels up" to the ol's parent which is a div (class name 'order-list') then the event happens there as well.
    The event starts at the element you clicked and then "bubbles up" through all of its parent elements, one by one, all the way to the very top. This is how event bubbling work. 

4. What is **Event Delegation** in JavaScript? Why is it useful? <br>
    Event delegation is a feature of JavaScript that use event bubbling system to handle events for multiple child element with a single event listener attached to their parent. Instead of adding event listener all of element, you put just a single event listener on the parent element. When someone shoot an event like a click on a child, it bubbles up to the parent and the parent's listener receives it. The listener of the parent use event.target method to identify which specific child element was clicked. It's called **Event Delegation**.

    It is **useful** to use because by adding a single event listener, we can fired several element. So performance will increase. It makes a element dynamic by writing short code and It reduces the amount of code needed, making it easier to read and maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods? <br>
    The difference is that
    **preventDefault()** stops the browser's default action for an event, like a link navigating to a new page or a form submitting.

    stopPropagation() stops an event from bubbling up the DOM tree, preventing it from affecting parent elements with their own event handlers.
