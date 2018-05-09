# angular-shoping
Learning MEAN app 

To run backend code goto crud-backend file and run nodemon


Using postman for testing 
After entering into url http://localhost:3000/api/item

POST :

{
	"itemName": "egg",
	"itemQuantity" : "12",
	"itemBought" : "false"
}

After sending the data
Error:

TypeError: Cannot read property 'itemName' of undefined
    at router.post (D:\javascript\angular_tutorial\shoppinglist\crud-backend\route\routes.js:25:26)
    
    
