import React, { Fragment, useState, useEffect } from 'react';
import {
  FlatList
} from 'react-native';
import Header from './src/Components/Header/Header'
import Foto from './src/Components/Foto/Foto'
import lerFotos from './src/Components/Api/feed'
import Comentarios from './src/Components/Comentarios/Comentarios'

const App = () => {
  const [fotos, setFotos] = useState([])
  useEffect(() => {
    lerFotos(setFotos);
  },[])

  return (
    <>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>  
            <Header 
              nomeUsuario={item.userName}
              urlImagem={item.userURL}
           />
            <Foto 
              fotoUrl={item.url}
              descricao={item.description}
              quantidadeLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
    </>
  );
};

export default App;   
