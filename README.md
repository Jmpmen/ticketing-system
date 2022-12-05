# Ticketing System

A ticketing system similar to what NOC Engineers used for tracking network issues. 

The user has the ability to create a ticket, update, delete, and add comments to existing tickets.

This is a 100hour project based on what we do as NOC engineers dealing with big clients.

**Link to project:** https://ticketing-system.onrender.com

![alt tag](https://github.com/Jmpmen/my-portfolio/blob/main/images/thumbs/04.jpg)

## How It's Made:

**Tech used:** MongoDB, Express, EJS, NodeJS, HTML, CSS, JavaScript, Tailwind, Passport, Cloudinary

This project uses React for interactive and dynamic user interface.

The backend follows the MVC architecture. MongoDB was used for the database, Node and Express for the backend server, and Passport for authentication.

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`


## Optimizations

This project can be further improved by maybe adding a sorting feature in the dashboard. The elements are sorted in the backend by default by severity and date created.

## Lessons Learned:

Tailwind is a CSS framework similar to Bootstrap, however Tailwind provides more flexibility and the ability to create custom designs and components easily by having a wide range of classes for styling. Working with tailwind gives developers more freedom .

Passport allows developers to facilitate the login process. It is flexible, and easy to integrate into your ExpressJS code.

This project alsp helped me have a deeper understanding of CRUD and database management.