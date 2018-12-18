/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  newBooking: {
    id: `${scope}.newBooking`,
    defaultMessage: 'New Booking',
  },
  calendar: {
    id: `${scope}.calendar`,
    defaultMessage: 'Calendar',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
});
