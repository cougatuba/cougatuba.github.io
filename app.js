
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
	 item: "Taco",
	 quantity: "5",
	 unit: "shells"
  })
  
  var addItemTextField = document.querySelector("#newGroceryItem");
  var addButton = document.querySelector("#addGroceryItem");
  
  
  addButton.addEventListener("click", function() {
	const textToSave = inputTextField.value;
	
	var addItem =  addItemTextField.value;
	
	console.log("I am saving " + additem + " to db");  
	grocColl.set({
		item: textToSave
	}).then(function() {
		console.log("Status saved!");
	}).catch(function (error) {
		console.log("Got an error: ", error);
	});
  });
	
	loadButton.addEventListener("click", function() {
		console.log("click");
		docRef.get().then(function (doc) {	
			if (doc && doc.exists) {
				const myData = doc.data();
				outputHeader.innerText = "Hot Dog Status: " + myData.hotDogStatus;
			}
		}).catch(function (error) {
			console.log("Got an error: ", error);
		});
  });
  
  getRealtimeUpdates = function() {
	  docRef.onSnapshot(function (doc) {
		  if (doc && doc.exists) {
				const myData = doc.data();
				outputHeader.innerText = "Hot Dog Status: " + myData.hotDogStatus;
				//outputBacon.innerText = "Bacon: " + myData.bacon;
				//outputBacon.innerText = "Flour: " + myData.flour;
			}
	  });
  }
  
  
  
  
  getRealtimeUpdates();
  
  