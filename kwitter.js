function addUser()
{
    user_name=document.getElementById("username").value;
    localStorage.setItem("user name", user_name);
    window.location="kwitter_room.html";
}