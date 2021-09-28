import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { 
    createStackNavigator,
    TransitionSpecs,
    HeaderStyleInterpolators,
    TransitionPresets
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
function HomeScreen({ navigation } : any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

function ProfileScreen({ navigation } : any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function NotificationsScreen({ navigation } : any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function SettingsScreen({ navigation } : any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go Account" onPress={() => navigation.navigate('Acount')} />
            {/* <Icon name="rocket" size={30} color="#900" /> */}
        </View>
    );
}

function AccountScreen({ navigation } : any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="AccountScreen" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const options = {
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    ...TransitionPresets
};

const HomeNavigation = [
    {
        name:'Home',
        component: HomeScreen,
        options:{...options}
    },
    {
        name:'Notifications',
        component: NotificationsScreen,
        options:{...options}
    },
    {
        name:'Profile',
        component: ProfileScreen,
        options:{...options}
    }
];

const SettingNavigation = [
    {
        name:'Setting',
        component: SettingsScreen,
        options:{...options}
    },
    {
        name:'Acount',
        component: AccountScreen,
        options:{...options}
    }
];

const Home = creactNavigatorStack(HomeNavigation);
const Settings = creactNavigatorStack(SettingNavigation);

const BottomTab = [
    {
        name:'Dashboard',
        component: Home,
        options:{headerShown:false}
    },
    {
        name:'Settings',
        component: Settings,
        options:{headerShown:false}
    },
];

function creactNavigatorStack (Screen:any,options?: {}) {
    return class extends React.Component {
        render() {
            return <Stack.Navigator {...options}>
                {
                    Screen.map((item:any,key:any) => (
                        <Stack.Screen
                            key={key} 
                            name={item.name} 
                            component={item.component} 
                            options ={item.options} 
                        />
                    ))
                }
            </Stack.Navigator>;
        }
    };
}

function createBottomTab(Screen:any,options?: {}) {
    return class extends React.Component {
        render() {
            return <Tab.Navigator {...options}>
                {
                    Screen.map((item:any,key:any) => (
                        <Tab.Screen key={key} name={item.name} component={item.component} 
                            options ={item.options} 
                        />
                    ))
                }
            </Tab.Navigator>;
        }
    };
}

const Btab = createBottomTab(BottomTab,{
    initialRouteName:'Home',
    screenOptions:() => ({
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
            height: 80,
            borderTop: 60,
            backgroundColor: '#EBEB88',
            elevation: 0,
            borderTopWidth: 0,
            shadowOffset: {
                width: 0, 
                height: 0
            }
        },
        tabBarIcon:() => {
            // const icons = {
            //     Dashboard: 'chart-bar',
            //     Settings: 'chart-pie',
            // };
            // return <TabBarIcon 
            //     route={route.name}
            //     // name={icons[route.name]} 
            //     color={props.color} size={30} />;   
        }
    }),
});   

export default function App() {
    return (
        <NavigationContainer>
            <Btab />
        </NavigationContainer>
    );
}

 