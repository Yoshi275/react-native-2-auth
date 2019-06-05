import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm.js';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true: 
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false: 
                return <LoginForm />;
            default: 
                return <Spinner size="large"/>;
        }
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        )
    }
}

export default App;