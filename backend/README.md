# Routes

### /api/dishes

- get / gets all dishes
- get /?category gets all dishes with the provided category
- get /search?name gets all dishes with dish name like provided name
- get /seed seeds the dishes with the data in data.js
- get /:id gets dish with dish_id
- post /add-dish adds dish
- put /update-dish updates dish with given \_id
- delete /delete-dish deletes dish with given \_id

### /api/users

- post /signin supply email and password to recieve a token
- post /signup supply name,email,password and optionally phonenumber. Recieve a token
- delete /delete-account supply \_id, and bearer token ( as authorization header)
- put /update-account supply attributes except password along with bearer token
- put /update-password supply \_id and password along with bearer token
