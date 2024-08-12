/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/HomeScreen` | `/(tabs)/Login` | `/(tabs)/Settings` | `/(tabs)/Signup` | `/(tabs)/StartScreen` | `/(tabs)/Terms` | `/(tabs)/explore` | `/(tabs)/jaja` | `/HomeScreen` | `/Login` | `/Settings` | `/Signup` | `/StartScreen` | `/Terms` | `/_sitemap` | `/explore` | `/jaja`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
