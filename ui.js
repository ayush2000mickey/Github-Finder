class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //Display ui and profile
  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-large btn-block mb-3" 
                        style="width: 100%">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary mt-1" style="font-size:1rem">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary mt-1" style="font-size:1rem">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success mt-1" style="font-size:1rem">Followers: ${user.followers}</span>
                        <span class="badge bg-info mt-1" style="font-size:1rem">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
  }

  //show user's repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary mt-1" style="font-size:1rem">Stars: ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary mt-1" style="font-size:1rem">Watchers: ${repo.watchers_count}</span>
                        <span class="badge bg-success mt-1" style="font-size:1rem">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
    });

    //output Repos
    document.getElementById("repos").innerHTML = output;
  }

  //Show Alert Message
  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();
    //create div
    const div = document.createElement("div");
    //Add classes
    div.className = className;
    //Add Text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector(".searchContainer");
    //Get Search box
    const search = document.querySelector(".search");
    //Insert alert
    container.insertBefore(div, search);

    //clear alert after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
