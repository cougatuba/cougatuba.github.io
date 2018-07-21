
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
  
  var firestore = firebase.firestore();
  
  const docRef = firestore.doc("samples/sandwichData");
  const outputHeader = document.querySelector("#hotDogOutput");
  
  const outputBacon = document.querySelector("bacon");
  const outputFlour = document.querySelector("flour");
  
  const inputTextField = document.querySelector("#latestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");
  
  saveButton.addEventListener("click", function() {
	const textToSave = inputTextField.value;
	console.log("I am saving " + textToSave + " to Firestore");  
	docRef.set({
		hotDogStatus: textToSave
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
				outputBacon.innerText = "Bacon: " + myData.bacon;
				outputBacon.innerText = "Flour: " + myData.flour;
			}
	  });
  }
  
  
  
  
  getRealtimeUpdates();
  
  