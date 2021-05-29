class Github {
  constructor() {
    this.client_id = "90026d2838557ad4a9bb";
    this.client_secret = "14350bc7725d1b97b90971d2c42353a361ed3c03";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    //Fetch User Profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );

    //fetch user's 5 latest repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
       &client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
