# angular-shoping
Learning MEAN app 

To run backend code goto crud-backend folder and run nodemon
To run frontend goto crud-angular folder and run nodemon
Run mongodb in localhost.

open browser localhost:4200

Problem :

Using postman for testing 
After entering into url http://localhost:3000/api/item

POST :

{
	"itemName": "egg",
	"itemQuantity" : "12",
	"itemBought" : "false"
}


It is working well.


But while entering values from angular. They are not going in to data base. But each time the submit button is clicked _id is generated in database.


