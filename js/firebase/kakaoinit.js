Kakao.init('4e32b4ac716986479266006a558d3f1c');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener('click', () =>{
    Kakao.Auth.authorize({
        redirectUri : "https://127.0.0.1:5500/ajqnrl-creatorss.github.io/kakao-callback.html"
    })
})