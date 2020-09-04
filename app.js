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

Fruit.insertMany([{orange},{banana}],function(err){
    if(err){
        console.log(err)
    }else{
        console.log('succeded')
    }
})
const people = new People({
    name:"mohamed elshahat ",
    age : "20"
})

 // fruit.save();
  people.save();
/* coonect to database or create one like the following fruitdb */

  /* this code will print the fruits inside your console 
  and then you can deal with the data as you want  */
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }