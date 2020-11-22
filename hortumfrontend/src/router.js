import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Appstack = createStackNavigator();

import LoginRegister  from './pages/Login_Register';
import Home from './pages/Home';
import MyGarden from './pages/MyGarden';
import Fertilizers from './pages/Fertilizers';
import Fertilizers_garrafa from './pages/Fertilizers/Garrafa';
import Fertilizers_latas from './pages/Fertilizers/Latas';
import Fertilizers_paletes from './pages/Fertilizers/Paletes';
import Fertilizers_pneus from './pages/Fertilizers/Pneus';
import Fertilizers_sapatos from './pages/Fertilizers/Sapatos';
import Fertilizers_banana from './pages/Fertilizers/Banana';
import Fertilizers_cafe from './pages/Fertilizers/Cafe';
import Fertilizers_cenoura from './pages/Fertilizers/Cenoura';
import Fertilizers_leite from './pages/Fertilizers/Leite';
import Fertilizers_ovo from './pages/Fertilizers/Ovo';
import Vegetables from './pages/Vegetables';
import Vegetables_pimentao from './pages/Vegetables/pimentao';
import Vegetables_tomate from './pages/Vegetables/tomate';
import Vegetables_abacaxi from './pages/Vegetables/abacaxi';
import Vegetables_vagem from './pages/Vegetables/vagem';
import Vegetables_alface from './pages/Vegetables/alface';
import Vegetables_acelga from './pages/Vegetables/acelga';
import Vegetables_cebolinha from './pages/Vegetables/cebolinha';
import Vegetables_coentro from './pages/Vegetables/coentro';
import HortumNetworking from './pages/HortumNetworking';
import Ranking from './pages/Ranking';

import { MyTokenContext } from './contexts/TokenProvider';


export default function Router() {
    const { isLoggedIn } = useContext(MyTokenContext);


    return (
        <NavigationContainer>
            <Appstack.Navigator>
                { isLoggedIn ? (
                    <>
                        <Appstack.Screen name='Home' component={Home}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='MyGarden' component={MyGarden}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers' component={Fertilizers}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_garrafa' component={Fertilizers_garrafa}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_latas' component={Fertilizers_latas}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_paletes' component={Fertilizers_paletes}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_pneus' component={Fertilizers_pneus}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_sapatos' component={Fertilizers_sapatos}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_banana' component={Fertilizers_banana}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_cafe' component={Fertilizers_cafe}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_cenoura' component={Fertilizers_cenoura}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_leite' component={Fertilizers_leite}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Fertilizers_ovo' component={Fertilizers_ovo}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables' component={Vegetables}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_pimentao' component={Vegetables_pimentao}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_tomate' component={Vegetables_tomate}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_abacaxi' component={Vegetables_abacaxi}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_vagem' component={Vegetables_vagem}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_alface' component={Vegetables_alface}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_acelga' component={Vegetables_acelga}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_cebolinha' component={Vegetables_cebolinha}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Vegetables_coentro' component={Vegetables_coentro}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='HortumNetworking' component={HortumNetworking}
                            options={{ headerShown: false }}
                        />
                        <Appstack.Screen name='Ranking' component={Ranking}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : (
                        <Appstack.Screen name='LoginRegister' component={LoginRegister}
                            options={{ headerShown: false }}
                        />
                    )}
            </Appstack.Navigator>
        </NavigationContainer>
    )
}







