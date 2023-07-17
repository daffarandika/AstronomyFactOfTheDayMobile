import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'xyz.daffarandika.astronomy',
  appName: 'AstronomyFactOfTheDayMobile',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }, 
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
