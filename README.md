# MIRCOBOOKSTORE

## What is MIRCOBOOKSTORE?

This website is a book store. It is a site where you can see the featured books, search for the book you want, see the book details and buy the books you want. 

## What are technologies used?

The frontend part of the project was prepared using React, a javascript framework. The functional component structure and hooks of React have been actively used. The React version is 18.2.0.
Typescript has been used to provide a better cod structure and to make it easier to encounter errors that may occur during development. The typescript version is 4.9.5.
For the state structure, redux, which is used extensively together with react, was used. A simpler version of Redux, the redux toolkit, has been used. The Redux toolkit version is 1.9.7.
React-router-dom is used for route control and configuration. The react-router-dom version is 6.19.0.

## What are the APIs used?

Only one api was used during the development of this project. This api is the [ItBook](https://api.itbook.store/) api. This is the api that will allow us to use this api in our project "https://api .itbook.store is /1.0/". This api has three endpoints. These;

### /search/{query}

This endpoint allows us to return a list of books according to the string we gave as a query. The string we will give as a query can be the author of the book or the name of the book.

Example;

Request --> https://api.itbook.store/1.0/search/mongodb

Response --> {
    "total": "48",
    "page": "1",
    "books": [
        {
            "title": "Practical MongoDB",
            "subtitle": "Architecting, Developing, and Administering MongoDB",
            "isbn13": "9781484206485",
            "price": "$32.04",
            "image": "https://itbook.store/img/books/9781484206485.png",
            "url": "https://itbook.store/books/9781484206485"
        },
        {
            title": "The Definitive Guide to MongoDB, 3rd Edition",
            subtitle": "A complete guide to dealing with Big Data using MongoDB",
            isbn13": "9781484211830",
            price": "$47.11",
            image": "https://itbook.store/img/books/9781484211830.png",
            url": "https://itbook.store/books/9781484211830"
        },
        {
            "title": "MongoDB in Action, 2nd Edition",
            "subtitle": "Covers MongoDB version 3.0",
            "isbn13": "9781617291609",
            "price": "$32.10",
            "image": "https://itbook.store/img/books/9781617291609.png",
            "url": "https://itbook.store/books/9781617291609"
        },
        ...
    ]
}

### /new

This endpoint returns the featured books.

Example;

Request --> https://api.itbook.store/1.0/new

Response --> { 
    "total": "20",
    "books": [
        {
            "title": "Designing Across Senses",
            "subtitle": "A Multimodal Approach to Product Design",
            "isbn13": "9781491954249",
            "price": "$27.59",
            "image": "https://itbook.store/img/books/9781491954249.png",
            "url": "https://itbook.store/books/9781491954249"
        },
        {
            title": "Web Scraping with Python, 2nd Edition",
            subtitle": "Collecting More Data from the Modern Web",
            isbn13": "9781491985571",
            price": "$33.99",
            image": "https://itbook.store/img/books/9781491985571.png",
            url": "https://itbook.store/books/9781491985571"
        },
        {
            "title": "Programming iOS 11",
            "subtitle": "Dive Deep into Views, View Controllers, and Frameworks",
            "isbn13": "9781491999226",
            "price": "$59.17",
            "image": "https://itbook.store/img/books/9781491999226.png",
            "url": "https://itbook.store/books/9781491999226"
        },
        ...
    ]
}

### /books/{isbn13}

This endpoint returns the book detail by taking the isbn13 value.

Example;
 
Request --> https://api.itbook.store/1.0/books/9781617294136

Response --> {
    "error": "0"
    "title": "Securing DevOps"
    "subtitle": "Security in the Cloud"
    "authors": "Julien Vehent"
    "publisher": "Manning"
    "isbn10": "1617294136"
    "isbn13": "9781617294136"
    "pages": "384"
    "year": "2018"
    "rating": "5"
    "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ..."
    "price": "$26.98"
    "image": "https://itbook.store/img/books/9781617294136.png"
    "url": "https://itbook.store/books/9781617294136"
    "pdf": {
              "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
              "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
           }
}

## Design Decision

I decided to make this site in a simple and simple design. Thanks to this, it became a site that the user could use more easily and did not tire of the eyes. I made sure that the design was responsive. Thanks to this, it works comfortably, stylishly and without any distortion on all kinds of devices such as mobile, tablet and desktop. I chose three main colors as colors. These are mint green, black and white. Darker and lighter shades of these colors were also used.

### Home Page

The homepage is the first page of our website to open. There is a header at the top of this page. When you look at the content part of the page, a slider appears first. This slider contains information about the first 5 featured books. The swiper library was used in the construction of this slider. The version of Swiper used is 11.0.4. There is a search section under this slider. This search part contains an input and a button. We can search for the book we want to search from here. There is a section below this search field where books are listed. In case there is no search, 20 featured books are listed here. The books that came as a result when the search was made are listed here.Dec. Books are listed in card form. These cards contain information about the picture, name and book. Additionally, there are two different buttons to go to the detail page and add to the cart. After this content field there is footer. Homepage includes these.

### Header

There is a button on the left side of the header that allows the hamburger menu to be opened. There is the logo of the site in the middle of the header. When this logo is clicked, it is redirected to the main page. On the far right side of the header, there is a button that opens the cart popup and the cart page on mobile. If the cart is empty, this cart is in the hollow shape of the icon of the button. When the basket is full, this icon looks full.

### Footer

The footer contains only the logo of the site and that it was made by me. When clicked here, it will be redirected to my personal github account.

### Detail Page

The detail page also contains the header and footer. There is a content section in the middle of the page. Detailed information of the book appears here. The user can add the book to the cart with the button on this page.

### Cart Page

The cart page is also designed in a similar way to the detail page. On this page the products in our cart are listed. We can see the total price. We can delete the products in the basket and increase the number of pieces. We can go to the checkout page by clicking on the button named 'Checkout'.

### Checkout Page

The design of the checkout page is also similar to the detail and cart page. On this page, we can see the books we have decided to buy in the content section. There is a form field below this section where we will enter the information necessary for the purchase. When you fill out the form correctly and click on the buy button, if the transaction is successful, success will appear modal.

### Success Modal

Success modal appears in front of everything and right in the middle of the page. There is a close button at the top here. There is an icon and a message under it indicating that you have been successful. There is a button at the bottom. When this button is clicked, the user is redirected to the main page.

### Cart Popup

Cart popup is available only in desktop and tablet design. It is not available in mobile design. This popup is the same as the content part of the cart page by design. Instead of the 'Checkout' button, there is a 'Go To Cart' button that redirects to the cart page.

## How to run the application?

For this, [NodeJs](https://nodejs.org/en) must be installed on your computer first. You can download and install it from here.This application was developed on a computer using version v17.5.0.

After installing NodeJS, run the **'npm install'** or **'yarn'** command on the terminal you opened in the application directory.

You can use the **'npm start'** or **'yarn start'** commands to run the application.

You can use the **'npm build'** or **'yarn build'** commands to get the build of the application.

You can use the **'npm test'** or **'yarn test'** commands to run the application's test.
