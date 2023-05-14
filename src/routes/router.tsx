import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Welcome, SelectSub, SelectSig } from '../screens'

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function WelcomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SelectSubscriptions' component={SelectSub} />
            <Stack.Screen name='SelectSignatures' component={SelectSig} />
        </Stack.Navigator>
    )
}

export function Router() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='WelcomeStack' component={WelcomeStack} />
        </Stack.Navigator>
    )
}