import React, {Fragment} from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import estilo from './estilo';

const Header = ({nomeUsuario, urlImagem}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image  
                source={{ uri: urlImagem }}
                style={estilo.fotoUsuario}
            />
            <Text>{nomeUsuario}</Text>
        </View>
        
    );
}

export default Header;