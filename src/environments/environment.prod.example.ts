/**
 * Production environment configuration.
 *
 * Replace the placeholder values below with your actual Beefree credentials.
 * For CI/CD pipelines, use Angular's file replacement strategy in angular.json
 * to swap this file at build time:
 *
 *   "fileReplacements": [{
 *     "replace": "src/environments/environment.ts",
 *     "with": "src/environments/environment.prod.ts"
 *   }]
 */
export const environment = {
  production: true,
  emailBuilder: {
    clientId: 'your-beefree-email-application-client-id',
    clientSecret: 'your-beefree-email-application-client-secret',
    userId: 'production-user',
    sampleTemplateUrl: 'https://rsrc.getbee.io/api/templates/m-bee',
    blankTemplateUrl: '/templates/blank-template.json',
  },
  pageBuilder: {
    clientId: 'your-beefree-page-application-client-id',
    clientSecret: 'your-beefree-page-application-client-secret',
    userId: 'production-user',
    sampleTemplateUrl: 'https://rsrc.getbee.io/api/templates/m-bee-page',
    blankTemplateUrl: '/templates/blank-template.json',
  },
  popupBuilder: {
    clientId: 'your-beefree-popup-application-client-id',
    clientSecret: 'your-beefree-popup-application-client-secret',
    userId: 'production-user',
    sampleTemplateUrl: 'https://rsrc.getbee.io/api/templates/m-bee-popup',
    blankTemplateUrl: '/templates/blank-template.json',
  },
  fileManager: {
    clientId: 'your-beefree-file-manager-application-client-id',
    clientSecret: 'your-beefree-file-manager-application-client-secret',
    userId: 'production-user',
    sampleTemplateUrl: '',
    blankTemplateUrl: '/templates/blank-template.json',
  },
}
