import type { Review, RatingSummary } from '@/types';

export const reviews: Review[] = [
  {
    id: 'review-1',
    customerName: 'James Mitchell',
    rating: 5,
    serviceReceived: 'Ceramic Coating',
    vehicleType: '2023 Tesla Model 3',
    text: 'Absolutely incredible work! My Tesla looks better than when I picked it up from the dealership. The ceramic coating gives it a mirror finish that repels water effortlessly. Professional service from start to finish.',
    date: '2024-11-15',
    avatar: '/brand/avatars/avatar-1.jpg',
  },
  {
    id: 'review-2',
    customerName: 'Sarah Thompson',
    rating: 5,
    serviceReceived: 'Full Interior + Exterior',
    vehicleType: '2022 BMW X5',
    text: 'I have two dogs and my SUV interior was in rough shape. They removed every pet hair and the leather looks brand new. The attention to detail is unmatched. Will definitely be coming back regularly.',
    date: '2024-11-10',
    avatar: '/brand/avatars/avatar-2.jpg',
  },
  {
    id: 'review-3',
    customerName: 'Michael Rodriguez',
    rating: 5,
    serviceReceived: 'Full Interior + Exterior',
    vehicleType: '2021 Ford F-150',
    text: 'My truck gets filthy at job sites every week. These guys made it look showroom new in just a few hours. The exterior polish brought back paint shine I thought was gone for good.',
    date: '2024-11-05',
    avatar: '/brand/avatars/avatar-3.jpg',
  },
  {
    id: 'review-4',
    customerName: 'Emily Chen',
    rating: 4,
    serviceReceived: 'Basic Wash',
    vehicleType: '2023 Honda Civic',
    text: 'Quick and thorough basic wash. My car looks great and they even cleaned the door jambs that most places skip. The only reason for 4 stars is I wish they had more weekend availability.',
    date: '2024-10-28',
    avatar: '/brand/avatars/avatar-4.jpg',
  },
  {
    id: 'review-5',
    customerName: 'David Park',
    rating: 5,
    serviceReceived: 'Ceramic Coating',
    vehicleType: '2024 Porsche 911',
    text: 'I trusted them with my 911 and they exceeded expectations. The multi-step paint correction removed all swirl marks and the ceramic coating is flawless. Six months later and water still beads perfectly.',
    date: '2024-10-20',
    avatar: '/brand/avatars/avatar-5.jpg',
  },
  {
    id: 'review-6',
    customerName: 'Jessica Williams',
    rating: 5,
    serviceReceived: 'Full Interior + Exterior',
    vehicleType: '2022 Toyota Highlander',
    text: 'Three kids means lots of crumbs and stains. The interior detail was transformative — they even got juice stains out of the fabric seats I thought were permanent. Highly recommend for families!',
    date: '2024-10-12',
    avatar: '/brand/avatars/avatar-6.jpg',
  },
  {
    id: 'review-7',
    customerName: 'Robert Johnson',
    rating: 4,
    serviceReceived: 'Basic Wash',
    vehicleType: '2020 Chevrolet Silverado',
    text: 'Good value for money. They did a solid job on my Silverado which is no small task. The interior vacuuming was thorough and the exterior was spotless. Will use again for my regular maintenance washes.',
    date: '2024-10-05',
    avatar: '/brand/avatars/avatar-7.jpg',
  },
  {
    id: 'review-8',
    customerName: 'Amanda Foster',
    rating: 5,
    serviceReceived: 'Ceramic Coating',
    vehicleType: '2023 Mercedes-Benz C300',
    text: 'The paint correction alone was worth it — years of micro scratches from automatic car washes completely gone. Add the ceramic coating and my C300 has never looked this good. Premium service for a premium car.',
    date: '2024-09-28',
    avatar: '/brand/avatars/avatar-8.jpg',
  },
  {
    id: 'review-9',
    customerName: 'Kevin Liu',
    rating: 5,
    serviceReceived: 'Full Interior + Exterior',
    vehicleType: '2021 Subaru Outback',
    text: 'I take my Outback on lots of trail rides and the interior was caked with dust and dirt. After the full detail it smells new again. They even got mud out of the carpet fibers. Impressive work!',
    date: '2024-09-20',
    avatar: '/brand/avatars/avatar-9.jpg',
  },
  {
    id: 'review-10',
    customerName: 'Nicole Anderson',
    rating: 4,
    serviceReceived: 'Basic Wash',
    vehicleType: '2022 Audi A4',
    text: 'Clean, professional, and efficient. My Audi looks fantastic after their basic wash service. The team was friendly and communicated well throughout the process. Great option for a quick refresh between full details.',
    date: '2024-09-15',
    avatar: '/brand/avatars/avatar-10.jpg',
  },
  {
    id: 'review-11',
    customerName: 'Marcus Brown',
    rating: 5,
    serviceReceived: 'Full Interior + Exterior',
    vehicleType: '2023 RAM 1500',
    text: 'Best detailing service in the area, hands down. My RAM looked brand new after their full service. The headlight restoration they recommended made a huge difference too. These guys know their stuff.',
    date: '2024-09-08',
    avatar: '/brand/avatars/avatar-11.jpg',
  },
  {
    id: 'review-12',
    customerName: 'Lisa Martinez',
    rating: 5,
    serviceReceived: 'Ceramic Coating',
    vehicleType: '2024 Lexus RX',
    text: 'Invested in ceramic coating for my new Lexus and could not be happier. The hydrophobic effect is amazing — rain just rolls right off. Makes regular washing so much easier. Worth every penny for paint protection.',
    date: '2024-09-01',
    avatar: '/brand/avatars/avatar-12.jpg',
  },
];

/**
 * Computes the aggregate rating summary from the reviews array.
 */
export function computeRatingSummary(reviewList: Review[]): RatingSummary {
  const distribution: Record<1 | 2 | 3 | 4 | 5, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  let total = 0;

  for (const review of reviewList) {
    distribution[review.rating]++;
    total += review.rating;
  }

  const average =
    reviewList.length > 0
      ? Math.round((total / reviewList.length) * 10) / 10
      : 0;

  return {
    average,
    totalReviews: reviewList.length,
    distribution,
  };
}

export const ratingSummary: RatingSummary = computeRatingSummary(reviews);
