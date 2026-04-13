export const sidebarData = [
  {
    id: 'booking',
    title: 'О бронировании',
    links: [
      { label: 'Бронирование билетов', path: '/info/booking' },
      { label: 'Оплата и возврат', path: '/info/payment' },
    ],
  },
  {
    id: 'trip',
    title: 'О поездке',
    links: [
      { label: 'Регистрация на рейс', path: '/info/check-in' },
      { label: 'Посадка', path: '/info/boarding' },
    ],
  },
  {
    id: 'baggage',
    title: 'О багаже',
    links: [
      { label: 'Нормы багажа', path: '/info/normy-bagazha' },
      { label: 'Опасные грузы', path: '/info/dangerous-goods' },
    ],
  },
];
