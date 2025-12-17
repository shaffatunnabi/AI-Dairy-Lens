import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="homepage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: 'Profile',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="CheckDisease"
        options={{
          title: 'Check Disease',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Records"
        options={{
          title: 'View Records',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Authentication"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
