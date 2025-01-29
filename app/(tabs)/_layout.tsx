import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type TabRouteName = 'home' | 'contacts' | 'message' | 'articles';
type IconName = 'home' | 'home-outline' | 'people' | 'people-outline' | 'chatbubble' | 'chatbubble-outline' | 'book' | 'book-outline';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName;
          
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'contacts') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'message') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'articles') {
            iconName = focused ? 'book' : 'book-outline';
          } else {
            iconName = 'home-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          height: 65,
          elevation: 8,
          boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#FF4D79',
        tabBarInactiveTintColor: '#9BA1A6',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#FFF',
          elevation: 0,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        headerTitleStyle: {
          color: '#11181C',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'left',
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Safe Her',
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Trusted Contacts',
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Emergency Messages',
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: 'Safety Articles',
        }}
      />
    </Tabs>
  );
}
