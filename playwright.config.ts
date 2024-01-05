import { defineConfig, devices } from '@playwright/test';
import { dot } from 'node:test/reporters';
import { json } from 'stream/consumers';
import * as os from 'os'


export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  ignoreSnapshots: false,
  timeout: 5 * 60 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
  reporter: [
    ['html', {outputFile: 'reports/healthhub-reports.html'}],
    ['dot'],
    ['allure-playwright', {suiteTitle: true, detail: true, environmentInfo: {os_platform: os.platform(), os_version: os.version(),}}],
  ],
  use: {
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Healthhub_Tests_Chrome',
      testDir: '.',
      snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
      use: { ...devices['Desktop Chrome'] ,
              channel: 'chrome',
              headless: false,
              baseURL: process.env.URL ? process.env.URL : 'https://www.google.com',
              screenshot: 'on',
            },
      
    },
    {
      name: 'APIM_Test',
      testDir: 'apim',
      snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
      use: { 
              baseURL: process.env.URL ? process.env.URL : 'https://reqres.in',
              extraHTTPHeaders: {
                'Accept': 'application/json',
              },
            },
      
    },
    /* {
      name: 'Healthhub_Tests_Safari',
      testDir: '.',
      snapshotPathTemplate: '{testDir}/screenshots/{testFilePath}/{arg}{ext}',
      use: { ...devices['Desktop Safari'] ,
              headless: false,
              baseURL: process.env.URL ? process.env.URL : 'https://www.google.com',
              screenshot: 'on',
            },
      
    }, */

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],


});
