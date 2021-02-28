import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class Login extends Component {
    render() {
        return   (
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email Username'}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                    />
                </View>

                <TouchableOpacity style={styles.btnlogin}>
                    <Text style={Styles.text}>login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})
export default Login;
