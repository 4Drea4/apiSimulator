# Read Me!
## Andrea E
*Monday November 17<sup>th</sup> 2025*


#### Want to install?
1. **Create a new project folder**
-Make a directory anywhere on your machine to hold the project.
2. **Clone or fork the repo**
-Fork the repo to your own GitHub account (optional).
-Clone it locally
3. **Initialize the project**
-Inside the folder, run: *npm init -y*
4. Install dependencies
-Install the project dependencies, this project uses TypeScript: *npm install typescript --save-dev*
5. Happy Studying!

Things I learned:
How to apply *Promises* to manage multiple asynchronous operations in JavaScript.
I implemented *Chain Promises* to handle sequential data retrieval and manage dependencies between API calls.<br>Utilize .catch() and .finally() to handle errors and perform cleanup tasks in a *Promise Chain*. <br>Designed custom error classes to improve error identification and debugging.<br> Implemented a retry mechanism to manage failed asynchronous requests, enhancing application resilience. <br>I used error handling strategies in asynchronous workflows.

### Critical Thinking Questions:
1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
This is so that we can keep track of what is properly being called and what is failing. Especially in a large amount of calls this would be very necessary.
2. How does using custom error classes improve debugging and error identification?
It makes debugging easier, reducing time that it would take to find the issues.

3. When might a retry mechanism be more effective than an immediate failure response?
Some api calls may take more time and it isnt just a failure, sometimes it could be connection issues as well.

<table>
  <tr>
    <td>
      <strong>References:</strong>
      <br>
      <a href="https://javascript.info/promise-error-handling">https://javascript.info/promise-error-handling</a>
    </td>
  </tr>
</table>



