const helper = async () => {
    try{
        const res = await fetch("https://codeforces.com/api/user.info?handles=knightstour");
        const data = await res.json();
        const codeforceApi = document.querySelector("#codeforceApi");
        codeforceApi.innerHTML =data.result[0].rating;

    }
    catch(error) {
        console.log(error);
    }
}
window.addEventListener("load",()=>{
    helper();
});