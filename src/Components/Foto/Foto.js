import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import estilo from './estilo'
import {imagemLike, curtiuFoto} from '../Api/curtidas'

const Foto = ({fotoUrl, descricao, quantidadeLikes}) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(quantidadeLikes)

    const clicouCurtir = ()=> {
        const [novoEstadoCurtiu, quantidade] = curtiuFoto(curtiu, likes)
        setLikes(quantidade)
        setCurtiu(novoEstadoCurtiu)
    }

    return (
        <>
            <Image
                source={{ uri: fotoUrl}}
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>

            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image 
                        source={imagemLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text style={estilo.text}>curtidas {likes}
                </Text>

            </View>
        </>
    );
};



export default Foto;    