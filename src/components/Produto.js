import React, {useContext} from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { deletar, edit } from '~/utils/dao';
import ProdContext from '~/utils/Context';
import { getProdutos } from '~/utils/dao';

const Produto = ({ navigation, p }) => {
    const { dispatch } = useContext(ProdContext)

    return (
        <View style={style.produtoView}>
            <View style={style.produtoFunctions}>
                <AntDesign 
                    name='edit' 
                    size={30} 
                    style={{ marginRight: 20 }} 
                    onPress={() => navigation.navigate("edit", { produto: p })} 
                />
                <AntDesign 
                    name='delete' 
                    size={30} 
                    style={{ marginRight: 20 }} 
                    onPress={() => {
                        Alert.alert('Deletar produto', 'Deseja excluir o produto ' + p.name + "?", [
                            {
                                text: 'Sim',
                                onPress: () => {
                                    deletar(p.id).then(
                                        () => getProdutos().then(
                                            (produtos) => dispatch({ type: 'att' , payload:produtos})
                                        )
                                    )

                                    navigation.goBack()
                                }
                            },
                            {
                                text: 'Não'
                            }
                        ])
                    }} 
                />
            </View>
            <Text style={style.produtoEmoji}>{p.emoji}</Text>
            <Text style={style.produtoText}>{p.name}</Text>
            <Text style={[style.produtoText, style.produtoPrice]}>R$ {p.price}</Text>
            <TouchableOpacity 
                style={p.isSold ? style.produtoVendido : style.produtoDisp} 
                disabled={p.isSold}
                onPress={() => {
                    const updatedProduct = { ...p, isSold: true };
                    edit(updatedProduct).then(
                        getProdutos().then(
                            (produtos) => dispatch({ type: 'att' , payload:produtos})
                        )
                    )
                    
                }}
            >
                <Text style={style.produtoTXT}>{p.isSold ? "Vendido" : "Comprar"}</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    produtoView: {
        padding: 15,
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 5
    },
    produtoFunctions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    produtoEmoji: {
        fontSize: 70,
        textAlign: 'center'
    },
    produtoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    produtoPrice: {
        color: '#aaa',
        marginBottom: 15
    },
    produtoVendido: {
        backgroundColor: "#aaa",
        borderRadius: 10
    },
    produtoDisp: {
        backgroundColor: "#2C7",
        borderRadius: 10
    },
    produtoTXT: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Produto;
