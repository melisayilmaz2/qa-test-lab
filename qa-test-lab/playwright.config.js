import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'tests',testMatch:'*.spec.js',use:{baseURL:'http://127.0.0.1:8000'},webServer:{command:'python3 -m http.server 8000',url:'http://127.0.0.1:8000',reuseExistingServer:!process.env.CI},retries:process.env.CI?1:0});
