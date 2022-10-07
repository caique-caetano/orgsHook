import React, { useState } from "react";
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native'




export default function Estrelas ({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}){
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    const estilos = estilosFuncao(grande);



    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++){
            listaEstrelas.push();
        }

        return listaEstrelas;
    }

    
    return <View style = {estilos.estrelas}>
                
                <   RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create ({
    estrelas: {
        flexDirection:'row'
    },
    estrela:
    {
        width: grande ? 36 : 12,
        height:grande ? 36: 12,
        //marginRight: 2,
    }

});