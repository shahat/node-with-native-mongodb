/* 
Auther : MOHAMED ELSHAHAT 
YEAR : 2020 
this how to use mongodb native to connct to app .js
LINK : https://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/ 
Cnclusion :: using native mongodb by this way will waist your time as a developer 
you can see the code in the first commit on githup 
*/

 // then i will start using mongoose
 const mongoose=require('mongoose');
/* these linse to solve the problem that 
happing whilw working with  */
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    'mongodb://localhost:27017/fruitdb'
    );
// creating Schema 
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating:Number,
    review : String
});
const peopleSchema = new mongoose.Schema ({
    name:String,
    age: Number
})
/*  */
const Fruit = mongoose.model("Fruit", fruitSchema);
const People = mongoose.model("People",peopleSchema);


const fruit= new Fruit ({
    name : "apple",
    rating:6,
    review:"pretty solid as fruit "
});
const orange= new Fruit ({
    name : "orange",
    rating:45,
    review:"pretty solid as fruit "
});const banana =  new Fruit ({
    name : "banana",
    rating:12,
    review:"pretty solid as fruit "
});
// this for inserting menay fruits
/*
Fruit.insertMany([orange,banana],function(err){
    if(err){
        console.log(err)
    }else{
        console.log('succeded')
    }
})*/
const people = new People({
    name:"mohamed elshahat ",
    age : "20"
})

  // fruit.save();

  people.save();
/* coonect to database or create one like the following fruitdb */

  /* this code will print the fruits inside your console 
  and then you can deal with the data as you want  */
  Fruit.find(function(err,fruits){
      if(err){
          console.log(err);
      }else{
            // close the connection once you done 
          mongoose.connection.close(); 
        
const fruitNames =   fruits.map(fruit => fruit.name) 
console.log(fruitNames)      
      }
      //another way to do this 
    /*  fruits.forEach(function(fruit){
          console.log(fruit.name);

      })*/
  })