import React, { useState, useContext } from "react";
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import EmojiPicker from "rn-emoji-keyboard";
import { adicionar } from "~/utils/dao";
import ProdContext from "~/utils/Context";
import { getProdutos } from "~/utils/dao";

export default ({ navigation }) => {
    const { dispatch } = useContext(ProdContext)

    const [newItem, setNewItem] = useState({
        emoji:'*',
        name:'',
        price:0,
        isSold: false,
        createAt: new Date()
    })
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <View style={style.page}>
            <Text style={style.titulo}>Selecione um novo produto</Text>
            <Text style={style.emoji} onPress={ () => setIsOpen(true)}>{newItem.emoji}</Text>

            <EmojiPicker 
                onEmojiSelected={(emojiObj) => setNewItem({...newItem, emoji:emojiObj.emoji})}
                open={isOpen}
                onClose={() => setIsOpen(false)}/>
            
            <TextInput 
                style={style.input}
                placeholder="Nome do produto" 
                value={newItem.name}
                onChangeText={ (nome) => setNewItem({...newItem, name: nome})}/>

            <TextInput 
                style={style.input}
                placeholder="Preço em R$"
                value={newItem.price} 
                onChangeText={ (preco) => setNewItem({...newItem, price: preco})}
                keyboardType="numeric"/>

            <Button title="adicionar" onPress={ () => {
                adicionar(newItem).then(
                    () => getProdutos().then(
                        (produtos) => dispatch({ type: 'att' , payload:produtos})
                    )
                )
                
                navigation.navigate('home',att=true)
            }} />
        </View>
        
    )
}

const style = StyleSheet.create({
    page:{
        padding: 30,
        alignItems:'center',
        gap:20
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    },
    emoji:{
        fontSize:50
    },
    input:{
        width:'100%',
        borderStyle:"solid",
        borderWidth:1,
        padding:5
    }
})