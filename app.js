
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
  const inputTextField = document.querySelector("#latestHotDogStatus");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");
  
  saveButton.addEventListener("click", function() {
	const textToSave = inputTextField.value;
	console.log("I am saving " + textToSave + " to Firestore");  
	docRef.set({
		hotDogOutput: textToSave
	}).then(function() {
		console.log("Status saved!");
	}).catch(function (error) {
		console.log("Got an error: ", error);
	})
  });
	
	loadButton.addEventListener("click", function() {
		console.log("click");
		docRef.get().then(function (doc) {	
			if (doc && doc.exists) {
				const myData = doc.data();
				outputHeader.innerText = "Hot Dog status: " + myData.hotDogStatus;
			}
		}).catch(function (error) {
			console.log("Got an error: ", error);
		})
  });