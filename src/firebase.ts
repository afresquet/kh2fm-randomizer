import fire from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBXp7MtGUJ5g4f2174xCUl1ia_0HB4_peo",
	authDomain: "kh2fm-randomizer.firebaseapp.com",
	databaseURL: "https://kh2fm-randomizer.firebaseio.com",
	projectId: "kh2fm-randomizer",
	storageBucket: "kh2fm-randomizer.appspot.com",
	messagingSenderId: "1078196607158",
	appId: "1:1078196607158:web:410e285b8ee119795c2e17",
	measurementId: "G-L193EWXWF5",
};

export const firebase = fire.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
