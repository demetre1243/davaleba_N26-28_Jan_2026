//                              ----------challages--------
/*

//Challenge 1
const jsonString = '{"id": 1, "product": "Laptop", "price": 1200}';
const obj = JSON.parse(jsonString);
obj.price = obj.price * 0.8;
const newJsonString = JSON.stringify(obj);
console.log(newJsonString);

//Challenge 2
const userProfileJSON = '{"name":"Demetre","age":16,"email":"gagiladze.d@gmail.com"}';
console.log(userProfileJSON.name);
const userProfileObj = JSON.parse(userProfileJSON);
console.log(userProfileObj.name);

 */

//---------------------დავალებები------------------
/*
//დავალება 1
   {
  "weather": [
    {
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "main": {
    "temp": 18.5,
    "feels_like": 17.9,
    "humidity": 72
  },
  "wind": {
    "speed": 3.6
  },
  "name": "Tbilisi"
}

    */
    /*
    {
  "id": 25,
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "types": [
    {
      "type": {
        "name": "electric"
      }
    }
  ]
}

     */
     /*
     {
  "Title": "Inception",
  "Year": "2010",
  "Genre": "Action, Sci-Fi",
  "Director": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio",
  "Ratings": [
    {
      "Source": "IMDb",
      "Value": "8.8/10"
    }
  ]
}

//დავალება 2
const user = {
    id: 1,
    username: "demetre",
    email: "demo@mail.com",
    password: "123456",
    role: "admin"
};
const json = JSON.stringify(user, ["email", "username"]);
console.log(json);
      */

//--------------------------ნომრები-------------------
/*
//1
const myLibrary = {
    owner: "Demetre",
    books: [
        { title: "Clean Code", author: "Robert C. Martin", isRead: true },
        { title: "The Pragmatic Programmer", author: "Andrew Hunt", isRead: false },
        { title: "JavaScript: The Good Parts", author: "Douglas Crockford", isRead: true }
    ],
    address: {
        city: "Tbilisi",
        street: "Rustaveli Ave"
    }
};
const jsonString = JSON.stringify(myLibrary);
console.log(jsonString);
console.log(jsonString.length);

//2
const invalidJson = '{"name": ნიკა}';
try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.log("JSON parse შეცდომა:", error.message);
}

//3
const invalidJson = '{"name": ნიკა}';
try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.log("JSON parse შეცდომა:", error.message);
}
 */

