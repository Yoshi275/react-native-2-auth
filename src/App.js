import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm.js';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCVcm98wBCXSsDteUhR5gBWoGbnCCiistU",
            authDomain: "auth-48045.firebaseapp.com",
            databaseURL: "https://auth-48045.firebaseio.com",
            projectId: "auth-48045",
            storageBucket: "auth-48045.appspot.com",
            messagingSenderId: "168718079679",
            appId: "1:168718079679:web:770793687c6fed72"
        });
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm></LoginForm>
            </View>
        )
    }
}

export default App;