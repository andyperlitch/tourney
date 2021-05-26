### TODO

- [x] client validations
  - [x] email not taken
  - [x] username not taken
- [x] add validationSchema with .test()
- [ ] Auth API endpoints
  - [x] /api/user/signup
  - [x] /api/users/login
  - [ ] /api/users/logout
  - [x] /api/users/whoami
- [ ] create page/component
  - [x] create login page
  - [x] create sign up page
  - [ ] create tournament page
- [ ] create a follow function for home page
- [ ] create button which creates tournament which goes to a create tournament page
- [x] validateRouter
  - [x] username
  - [x] email
- [x] lowercase the email and username when finding and inserting
- [x] formik submit form
  - [x] call create store user function
- [ ] throttle/delay/debounce async in formik for form validations
- [x] use express session and redis to create session
  - [x] create a function that takes req as an arg and User as arg and assigns it to
