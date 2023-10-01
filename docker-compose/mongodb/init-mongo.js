db.createUser({
  user: "username",
  pwd: "password_123",
  roles: [
    {
      role: "readWrite",
      db: "admin",
    },
  ],
});
