import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput
} from 'react-native';
import estilo from './estilo'

const Comentarios = ( {comentarios} ) => {

    const [estadoComentario, setComentarios] = useState(comentarios)

    const adcionaComentario = () => {
        console.warn(conteudoCampoInput);
        campoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "VictorSantoryu"
        }

        setComentarios([...estadoComentario, novoComentario]);
    } 

    let campoInput = "";
    let conteudoCampoInput = "";
    return (
        <Fragment>
            <FlatList
                data={estadoComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>  
                    <View style={estilo.naMesmaLinha}>
                        <Text>{item.userName} </Text>
                        <Text> {item.text}</Text>
                    </View>}
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput
                    ref={textInput => campoInput = textInput} 
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentario..."}
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={adcionaComentario}>
                    <Image 
                        source={require("../../../res/img/send.png")}
                        style={estilo.imgSend}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

export default Comentarios