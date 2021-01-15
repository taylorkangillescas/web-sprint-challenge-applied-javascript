
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

import axios from "axios";

  //
  const Tabs = (topics) => {
    const topicsDiv = document.createElement("div"); // creating elements
    const jsDiv = document.createElement("div");
    const bsDiv = document.createElement("div");
    const techDiv = document.createElement("div");

    topicsDiv.classList.add('topics'); // adding classes
    jsDiv.classList.add('tab');
    bsDiv.classList.add('tab');
    techDiv.classList.add('tab');

    topicsDiv.appendChild(jsDiv); // appending children to topicsDiv
    topicsDiv.appendChild(bsDiv);
    topicsDiv.appendChild(techDiv);

    jsDiv.textContent = "javascript"; // adding content
    bsDiv.textContent = "bootstrap";
    techDiv.textContent = "technology";

    return topicsDiv;
  }


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  //const tabsAppender = (selector) => {
//}

const tabsAppender = document.querySelector(".topics");
axios
.get("https://lambda-times-api.herokuapp.com/topics")
.then(response =>{
  console.log(response.data.topics);
  const object = response.data.topics;

  response.data.topics.forEach(item => {
    function tCard(){
      const topicsDiv = document.createElement("div");
      topicsDiv.classList.add("tab");
      topicsDiv.textContent = item;

      return topicsDiv;
    }
    let newCard = tCard(item);
    tabsAppender.appendChild(newCard)
  });
});

export { Tabs, tabsAppender }
