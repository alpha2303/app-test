import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    TouchableNativeFeedback 
} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.input} 
                    placeholder="Username or email address"
                    placeholderTextColor='grey'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    returnKeyLabel='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput style={styles.input}
                    placeholder="Password" 
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                    returnKeyLabel='go'
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}     
                >
                    <View style={styles.logButton}>
                        <Text style={styles.logText}>
                            {this.props.type}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    logButton: {
        backgroundColor: '#36d1f2',
        paddingVertical: 15,
        marginVertical: 15,
        borderRadius: 8,
    },
    logText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
    }
});