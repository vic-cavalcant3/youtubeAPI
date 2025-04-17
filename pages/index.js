import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HoverEffect } from 'react-native-gesture-handler';
// import Routes from './routes';


export default function Bem_Vindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rotaInterna')}>
                <Text style={styles.buttonText}>Acesse aqui</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('pesquisavimeo')}>
                <Text style={styles.buttonText}>API do vimeo</Text>
            </TouchableOpacity> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '##D4F1F4'
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#75E6DA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
    },

    buttonText: {
        color: '#000',
        fontWeight: '500',
        fontSize: 16,
    }

    
});
