# Task Management Website

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Author](#Author)

#

### Prerequisites

- <img src="readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_
- <img src="readme/vite.jpg" width="25" style="top: 8px" /> _vite @4.0.0_
- <img src="readme/typescript.png" width="25" style="top: 8px" /> _typescript @4.9.3_

#

### Tech Stack

- <img src="readme/react.png" width="25" style="top: 8px" /> _React @18.2.0 - front-end framework_
- <img src="/assets/G0R0sjHH_400x400.jpg" width="25" style="top: 8px" /> _Tailwind_css @5.3.6 - visual primitives for the component age_
- <img src="readme/router.png" width="25" style="top: 8px" /> _React Router @6.6.1 - React library for routing_
- <img src="readme/helmet.jpg" width="25" style="top: 8px" /> _React Helmet @6.1.0 - library for write code in head from JSX_
- <img src="readme/react-hook-form-logo-only.png" width="25" style="top: 8px" /> \_React Hook Form @7.1.1 - Library for Handling Form State and Validation in React
- <img src="readme/Screenshot 2024-06-30 at 3.19.37 PM.png" width="25" style="top: 8px" /> \_react-input/mask
  -Library used to enter input in a certain format such as numeric, date, currency, email and phone.

#

### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- pages
|   |---|--- index.ts # export all pages
|   |---|--- components # reusable components
|   |---|--- containers # containers for pages
|   |---|--- index.ts # export all components
|   |--- types
|   |---|--- types.d.ts # declare all types
|   |--- App.tsx # main page
|   |--- ScrollOnTop # functionality of scrolling top when rout changes
- package.json     # dependency manager configurations

```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Author

- [LinkedIn](https://www.linkedin.com/in/mariam--davitashvili/) _Mariam Davitashvili_
