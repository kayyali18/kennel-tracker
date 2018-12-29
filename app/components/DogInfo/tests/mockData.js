/* eslint-disable */
const state = [
  {
    location: '/dog',
    id: '4',
    type: 'reservation',
    state: {
      runNumber: 23,
      checkin: '2018-12-16T09:13:44.000-05:00',
      checkout: '2018-12-21T06:41:40.000-05:00',
      grooming: false,
      daycare: true,
      boarding: false,
      owner: {
        data: {
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
  },
  {
    id: '6',
    type: 'reservation',
    attributes: {
      runNumber: 27,
      checkin: '2018-12-18T03:36:53.000-05:00',
      checkout: '2018-12-21T22:10:52.000-05:00',
      grooming: false,
      daycare: true,
      boarding: false,
      owner: {
        data: {
          id: '10',
          type: 'owner',
          attributes: {
            firstName: 'Gertrudis',
            lastName: 'Corkery',
            address: 'Suite 839 30263 Moen Lakes, West Selina, NC 91830-8845',
            homePhone: '467.550.8660',
            cellPhone: '(109) 776-7405',
            email: 'onalegros@bernhard.net',
          },
        },
      },
      pet: {
        data: {
          id: '11',
          type: 'pet',
          attributes: {
            name: 'Bruno',
            species: 'Dog',
            breed: 'Airedale',
            color: 'Black',
            dob: '2017-03-18T20:00:00.000-04:00',
            spayedNeutered: true,
            medications: 'None',
            feedingInstructions: '3 times a day 1/2 cup',
            shots: 'Rabies: 12/10/2018',
          },
        },
      },
    },
  },
]

export default state
