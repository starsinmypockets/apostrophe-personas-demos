var path = require('path');

var apos = require('apostrophe')({
  shortName: 'personas-demo',
  baseUrl: 'http://localhost:3333',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    'apostrophe-workflow': {
      alias: 'workflow',
      locales: [
        {
          name: 'en',
          label: 'English'
        },
        {
          name: 'fr',
          label: 'French'
        }
      ],
      prefixes: {
        'en': '/en',
        'fr': '/fr'
      },
      defaultLocale: 'en'
    },
    'apostrophe-personas': {
      personas: [
        {
          name: 'car',
          label: 'Car',
          prefixes: {
            'en': '/car',
            'fr': '/auto'
          }
        },
        {
          name: 'truck',
          label: 'Truck',
          prefixes: {
            'en': '/truck',
            'fr': '/camion'
          }
        }
      ]
    },
    'link-widgets': {},
    'products': {},
    'products-pages': {},
    'product-link-widgets': {},
    'apostrophe-pages': {
      types: [
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'products-page',
          label: 'Products'
        }
      ]
    },

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  }
});
