import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home'
import Add from '../screens/Add'
import Edit from '~/screens/Edit';
import { ProviderAtt } from '~/utils/Context';

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <NavigationContainer>
            <ProviderAtt>
                <Stack.Navigator initialRouteName="home">

                    <Stack.Screen
                        name="home"
                        component={Home}
                        options={({ navigation }) => {
                            return {
                                headerTitle: 'Produtos',
                                headerRight: () => <AntDesign name='plus' size={30} style={{ marginRight: 20 }} onPress={() => navigation.navigate("add")} />
                            }
                        }} />

                    <Stack.Screen
                        name="add"
                        component={Add}
                        options={{ headerTitle: 'Cadastrar Produto' }} />

                    <Stack.Screen
                        name="edit"
                        component={Edit}
                        options={{ headerTitle: 'Editar Produto' }} />

                </Stack.Navigator>
            </ProviderAtt>
        </NavigationContainer>
    );
}
