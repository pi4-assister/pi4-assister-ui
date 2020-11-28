export const userStore = {
  authenticated: false,
  address: '',
  bio: '',
  birthdate: '2020-11-24T20:37:00.507Z',
  city: '',
  customerSpecialNeedsList: [
    {
      id: '',
      specialNeedType: {
        name: '',
        price: 0,
      },
    },
  ],
  customerStatus: 'REGISTERED',
  customerType: 'CLIENT',
  email: '',
  emergencyNumber: '',
  fullName: '',
  id: '',
  personIdentifier: '',
  phoneNumber: '',
  photoUrl: '',
  state: '',
  zipCode: '',
};

export const moduleAuth = {
  state: () => ({
    session: {
      post: '/api/v1/session/',
    },
    user: { ...JSON.parse(sessionStorage.getItem('user')) || userStore },
  }),
};
