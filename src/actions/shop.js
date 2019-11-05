import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types';

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]

    })
}


export function fetchShopProducts() {
    return ({
      type: SET_SHOP_PRODUCTS,
      payload: [
          {
              _id: 0,
              title: 'JavaScript in The Browser',
              description: 'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
              price: 1.99,
              belongsTo: [0,1]
          },
          {
              _id: 1,
              title: 'Graph Database',
              description: 'Database that uses graph structures for semantic queries with nodes, edges, and properties to represent and store data. A key concept of the system is the graph',
              price: 1.99,
              belongsTo: [0, 6]
          },
          {
              _id: 2,
              title: 'Full Stack Development',
              description: 'Full stack development: It refers to the development of both front end(client side) and back end(server side) portions of web application. Full stack web Developers: Full stack web developers have the ability to design complete web application and websites.',
              price: 1.99,
              belongsTo: [0, 1, 4]
          },
          {
              _id: 3,
              title: 'User Interface Design',
              description: 'User interface (UI) design is the process of making interfaces in software or computerized devices with a focus on looks or style. Designers aim to create designs users will find easy to use and pleasurable. UI design typically refers to graphical user interfaces but also includes others, such as voice-controlled ones.',
              price: 1.99,
              belongsTo: [0, 2]
          },
          {
              _id: 4,
              title: 'Javascript Development',
              description: 'JavaScript ("JS" for short) is a full-fledged dynamic programming language that, when applied to an HTML document, can provide dynamic interactivity on websites. It was invented by Brendan Eich, co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation. JavaScript is incredibly versatile.',
              price: 1.99,
              belongsTo: [0, 1]
          },
          {
              _id: 5,
              title: 'User Experience Design',
              description: 'User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.',
              price: 1.99,
              belongsTo: [0, 2]
          },
          {
              _id: 6,
              title: 'Advanced OOP',
              description: 'Object Oriented programming is a programming style which is associated with the concepts like class, object, Inheritance, Encapsulation, Abstraction, Polymorphism. Most popular programming languages like Java, C++, C#, Ruby, etc.',
              price: 1.99,
              belongsTo: [0, 6]
          },
       ]
    })
  }