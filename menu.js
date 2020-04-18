// function setup() {
//     noCanvas();
//     let userinput = select('#darkModeInput2');
//     userinput.input(newVal);

//     function newVal() {
//         console.log("NewVal")

//         let params = {
//             active: true,
//             currentWindow: true
//         }

//         chrome.tabs.query(params, gotTabs);

//         function gotTabs(tabs) {
//             console.log("Got Tabs");
//             console.log(tabs)

//             let message = userinput.value();
//             let msg = {
//                 txt: "hello"
//             }
//             chrome.tabs.sendMessage(tabs[0].id, msg);
//         }
//     }
// }


function setup() {
    noCanvas();
    let userinput = select('#darkModeInput');
    userinput.input(changeText);
    // userinput.value(changeText);
  
    function changeText() {
      console.log('text changed');
  
      let params = {
        active: true,
        currentWindow: true
      };
      chrome.tabs.query(params, gotTabs);
  
      function gotTabs(tabs) {
        console.log('got tabs');
        console.log(tabs);
        // send a message to the content script
        // let message = userinput.value();
        let msg = {
          txt: "change"
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
      }
    }
  }

//   var el = document.getElementById("darkModeInput");
//   if(el) {
//     el.addEventListener('click', calc);
//   }
    
//   function calc() {
//     console.log("called")
//     let params = {
//         active: true,
//         currentWindow: true
//       };
//       chrome.tabs.query(params, gotTabs);

//     function gotTabs(tabs) {
//         console.log('got tabs');
//         console.log(tabs);
//         // send a message to the content script
//         // let message = userinput.value();
//         if (document.getElementById('darkModeInput').checked) {
//             let msg = {
//                 txt: "on"
//             };
//         } else {
//             let msg = {
//                 txt: "off"
//             }
//         }

//         chrome.tabs.sendMessage(tabs[0].id, msg);
//     }
// }