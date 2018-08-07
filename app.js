
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHbO_STf1lt6ApLJmtM04jvlETKapaDiw",
    authDomain: "cougatubapage.firebaseapp.com",
    databaseURL: "https://cougatubapage.firebaseio.com",
    projectId: "cougatubapage",
    storageBucket: "cougatubapage.appspot.com",
    messagingSenderId: "915171749535"
  };
  firebase.initializeApp(config);
  
  var db = firebase.firestore();
  
  db.collection("groceries").add({
	 "taco"
  })
  
  var addItemTextField = document.querySelector("#newGroceryItem");
  var addButton = document.querySelector("#addGroceryItem");
  
  
  addButton.addEventListener("click", function() {
	
	var addItem =  addItemTextField.value;
	
	console.log("I am saving " + addItem + " to db");  
	grocColl.set({
		item: textToSave
	}).then(function() {
		console.log("Status saved!");
	}).catch(function (error) {
		console.log("Got an error: ", error);
	});
  }) 