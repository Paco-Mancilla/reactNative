import React, {Component} from 'react';
import { Platform,
StyleSheet,
View, 
Text,
Image,
TextInput,
TouchableOpacity, } from 'react';

import {Actions} from 'react-native-router-flux'
import { getToken } from './api-client';



export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state={
            username:null,
            password:null,
        };
    }

    ingresar = () => {
        getToken(this.state.username, thie.state.password).then(data=>{
            global.token= data.token
            Actions.home()
        }).catch((error) => {
            //Acccion si hay un error en la respusta
            console.warn(error)
        })
    }

    render (){
        return(
            <View style={StyleSheet.container}>
            <Image source={require('./assets/ucol.png')} style={styles.logo} resizeMode="Contain"/>
            <TextInput
            style={styles.textInput}
            onChangeText={(username)=>this.setSatate({username})}
            value={this.state.username}
            placeholder={'Correo electronico'}
            placeholderTextColor={'#000035'}
            onSubmitEditing={()=>{this.passwordTextInput.focus();}}
            />
            <TextInput
            style={styles.textInput}
            onChangeText={(password)=>this.setSatate({password})}
            value={this.state.password}
            secureTextEntry={Entry}
            placeholder={'Contraseña'}
            placeholderTextColor={'#000035'}
            ref={(input)=>{this.passwordTextInput=input;}}
            returnKeyType={'done'}
            onSubmitEditing={this.ingresar}
            />
            <TouchableOpacity onPress={this.ingresar}style={styles.boton}>
                <Text style={styles.textBoton}>
                    Entrar
                </Text>
            </TouchableOpacity>
            </View>
        );
    }

}


