module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link',
  addFields: [
    {
      type: 'joinByOne',
      name: '_page',
      withType: 'apostrophe-page'
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
