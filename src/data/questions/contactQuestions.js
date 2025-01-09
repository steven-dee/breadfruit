export const contactQuestions = [
  {
    id: 'personalInfo',
    type: 'form',
    fields: [
      {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true
      },
      {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        required: true
      }
    ]
  },
  {
    id: 'addressInfo',
    type: 'form',
    getTitleWithName: (answers) => {
      const firstName = answers?.personalInfo?.firstName || '';
      return `${firstName}, Good News! We've Found Matches For You.`;
    },
    subtitle: 'Providing the address where your car is parked ensures you receive the best coverage and price',
    fields: [
      {
        id: 'street',
        label: 'Street Address',
        type: 'text',
        placeholder: 'E.G. 123 Main St',
        required: true
      },
      {
        id: 'zipCode',
        label: 'Zip Code',
        type: 'text',
        required: true
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: true
      }
    ]
  }
];