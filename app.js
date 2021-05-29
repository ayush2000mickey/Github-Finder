//Init Github
const github = new Github();
//Init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");

//SearchUser Event listener
searchUser.addEventListener("keyup", (e) => {
  //Get User Text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
