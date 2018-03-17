module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Product Link',
  addFields: [
    {
      type: 'joinByOne',
      name: '_product',
      withType: 'product'
    },
    {
      type: 'select',
      name: 'linkToPersona',
      choices: [
        {
          value: '',
          label: 'Universal'
        },
        {
          value: 'truck',
          label: 'Truck'
        },
        {
          value: 'car',
          label: 'Car'
        }
      ]
    }
  ]
};
