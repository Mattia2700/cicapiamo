import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.intesavincente',
  appName: 'Ci Capiamo?',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
