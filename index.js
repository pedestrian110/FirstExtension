let userName="";
function displayWord() {
    userName = document.getElementById("userWord").value;
    helper();
}
const helper = async () => {
    try{
        
        const res = await fetch(`https://codeforces.com/api/problemset.problems`);
        const data = await res.json();
        const arr = [];
        //console.log(data.result.problemStatistics[0]);
        const cur = data.result.problemStatistics[0].contestId;
        for (let i = 0; i < 15; i++) {
            if (data.result.problemStatistics[i].contestId === cur ) {
                const tmp = {};
                tmp[data.result.problemStatistics[i].index] = data.result.problemStatistics[i].solvedCount;
                arr.push(tmp);
            }
        }
        arr.sort((a, b) => a.solvedCount- b.solvedCount);
        console.log(arr);


        
        //const res = await fetch(`https://codeforces.com/api/user.info?handles=${userName}`);
        // if (data.status == "OK") {
        //     if (data.result[0].rating === undefined) {
                
        //         const codeforceApi = document.querySelector("#codeforceApi");
        //         codeforceApi.innerHTML =userName;
        //         const userTitle = document.querySelector("#userTitle");
        //         userTitle.innerHTML = "No Contest by";

        //     }
        //     else {
        //         const codeforceApi = document.querySelector("#codeforceApi");
        //         codeforceApi.innerHTML =data.result[0].maxRating + " " + data.result[0].maxRank;
        //         const userTitle = document.querySelector("#userTitle");
        //         userTitle.innerHTML = userName;
        //     }
            
        // }
        // else {
        //     const userTitle = document.querySelector("#userTitle");
        //     userTitle.innerHTML = "No User";
        //     const codeforceApi = document.querySelector("#codeforceApi");
        //     codeforceApi.innerHTML ="";
        // }
        

    }
    catch(error) {
        console.log(error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", displayWord);
});

// window.addEventListener("load",()=>{
//     helper();
// });