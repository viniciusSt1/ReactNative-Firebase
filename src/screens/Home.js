import React, { useContext } from "react";
import { FlatList, Button, View, Text } from 'react-native';
import Produto from "~/components/Produto";
import ProdContext from "~/utils/Context";

export default ({ navigation }) => {
    const { state } = useContext(ProdContext)

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={state.produtos}
                keyExtractor={produto => produto.id.toString()}
                renderItem={({ item }) => (
                    <Produto p={item} navigation={navigation} />
                )}
                ListEmptyComponent={<Text>Nenhum produto disponível.</Text>}
            />
            {/*<Button title="Verificar estado" onPress={() => console.warn(state.produtos)} />*/}
        </View>
    );
};
