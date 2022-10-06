import React from "react";
import {StyleSheet, Image} from 'react-native'
import estrela from '../../assets/estrela.png'
import estrelaCinza from '../../assets/estrelaCinza.png'

export default function Estrelas ({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}){
    return <Image style={estilos.estrela} source={estrela}/>
}

const estilos = StyleSheet.create ({
    estrela:
    {
        width: 12,
        height:12,
    }

})