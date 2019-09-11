class User {
  constructor(username, password, email) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.userType;
      this.users = db.collection('users');
  }

  async addUser(user) {
    // format a user object
    const newUser = {
      username: user.username,
      password: user.password,
      email: user.email,
      userType: user.userType
    };
    // save the user to database
    const response = await this.users.add(newUser);
    return response;
  }
}