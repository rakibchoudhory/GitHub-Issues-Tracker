// Login 
const openHomePage = ()  => {
    let userInput = document.getElementById("user-input"); 
    let userValue = userInput.value;
    console.log(userValue);
    
    let passwordInput = document.getElementById("password-input"); 
    let passwordValue = passwordInput.value;
    console.log(passwordValue);
    
    if (userValue =="admin" && passwordValue =="admin123"){

        window.location.assign('homepage.html')
    }
}



const loadissues = () => {

      manageLoading(true);
    let url= "https://phi-lab-server.vercel.app/api/v1/lab/issues";

   fetch(url)
    .then(res => res.json())
    .then(data => {
        displayissues(data.data);
        manageLoading(false);
    })
}

// let loadOpen = ()=>{
//         let openButton= document.getElementById("btn-open");
//      let totalCount =  openButton.innerText=issues.length;
//      console.log(totalCount);
//     }

//  {
// "id": 3,
// "title": "Update README with installation instructions",
// "description": "The README file needs better installation instructions for new contributors.",
// "status": "closed",
// "labels": [
// "documentation"
// ],
// "priority": "low",
// "author": "mike_docs",
// "assignee": "sarah_dev",
// "createdAt": "2024-01-10T08:00:00Z",
// "updatedAt": "2024-01-12T16:45:00Z"
// }

const displayissues= (issues) => {
    // console.log(issues);

     let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    
    document.getElementById("issues-count").innerText = issues.length;
  
    for (let issue of issues){
        let newDiv= document.createElement("div");
    //   console.log(issues);
        if ( issue.status=="open"){
           newDiv.innerHTML=`
           
               <div onclick="cardDetails(${issue.id})"  class="h-full flex flex-col card  shadow-sm w-11/12 mx-auto border-t-5 border-green-500 hover:scale-104 transition duration-300 ">
                <div class="w-11/12 mx-auto py-3 h-auto">
                    <div class="flex items-center justify-between  mb-4  ">
                        <img src="./image/Open-Status.png" alt="">
                        <p class="px-8 py-1 bg-red-100 rounded-full">${issue.priority}</p>
                    </div>
                    <div class="space-y-1 mb-4">
                        <h2 class="font-semibold text-xl">${issue.title}</h2>
                        <p class="text-gray-400"> 
                        ${issue.description}
                        </p>
                    </div>

                    <div class="flex gap-2 flex-wrap">
                     ${textLevel(issue.labels)}
                    </div>

                </div>
                <div class="border-t-1 border-gray-200">
                    <div class="w-11/12 mx-auto py-3">
                        <p class="text-gray-400">${issue.id} ${issue.author}</p>
                        <p class="text-gray-400">${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
                    </div>
                </div>
            </div>

           
           `;
         cardContainer.appendChild(newDiv);

          let allBtnCountIssues= document.getElementById("issues-count");
           allBtnCountIssues.innerText=cardContainer.children.length;
        }
        else {
           newDiv.innerHTML=`
              <div onclick="cardDetails(${issue.id})" class="card shadow-sm w-11/12 mx-auto border-t-5 border-[#A855F7]  h-full flex flex-col hover:scale-104 transition duration-300 ">
                <div class="w-11/12 mx-auto py-3 ">
                    <div class="flex items-center justify-between  mb-4  ">
                        <img src="./image/Closed- Status .png" alt="">
                        <p class="px-8 py-1 bg-red-100 rounded-full">${issue.priority}</p>
                    </div>
                    <div class="space-y-1 mb-4">
                        <h2 class="font-semibold text-xl">${issue.title}</h2>
                        <p class="text-gray-400"> 
                        ${issue.description}
                        </p>
                    </div>

                    <div class="flex gap-2 flex-wrap">
                      ${textLevel(issue.labels)}
                    </div>

                </div>
                <div class="border-t-1 border-gray-200">
                    <div class="w-11/12 mx-auto py-3">
                        <p class="text-gray-400">${issue.id} ${issue.author}</p>
                        <p class="text-gray-400">${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
                    </div>
                </div>
            </div>
           `;

         cardContainer.appendChild(newDiv);
        }
        
        
    }
    
 
}




window.onload = () => {
    loadissues();
}