# TypeScript OOP API EXAMPLE

### **Model**
Contains base classes, such as User class, with getters and setters

### **Repository**  
Contains interfaces which determine the methods to be included in the Service classes.

### **Service**  
Contains the classes that will implement the repository interface and will interact directly with the MongooseSchemas  

### **Schema**   
Contains the actual Mongoose Schemas;

### **Controller**
Calls Services And Contains all business logic related to Class manipulation:
Example: get all users, creat user, etc... this will be called by routes which contain the mapping to endpoints

