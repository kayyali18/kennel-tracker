/* eslint-disable */
const mockState = {
  props: '/dog',
  id: '4',
  type: 'reservation',
  dogs: {
    run: 23,
    checkin: '2018-12-16T09:13:44.000-05:00',
    checkout: '2018-12-21T06:41:40.000-05:00',
    grooming: false,
    daycare: true,
    boarding: false,
    location: {
      state: {
        id: '7',
        type: 'owner',
        attributes: {
          firstName: 'Randolph',
          lastName: 'Ankunding',
          address: 'Apt. 243 334 Kuphal Plains, Pamstad, AZ 03931',
          homePhone: '442.576.6687',
          cellPhone: '(835) 420-3987',
          email: 'colemanglover@wolff.info',
        },
      },
    },
    pet: {
      data: {
        id: '15',
        type: 'pet',
        attributes: {
          name: 'Roxie',
          species: 'Dog',
          breed: 'Patterdale Terrier',
          color: 'Black',
          dob: '2015-06-02T20:00:00.000-04:00',
          spayedNeutered: true,
          medications: 'None',
          feedingInstructions: '3 times a day 1/2 cup',
          shots: 'Rabies: 12/10/2018',
        },
      },
    },
  },
}

export { mockState }
