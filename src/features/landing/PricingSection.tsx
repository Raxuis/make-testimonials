import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { currentUser } from '@/auth/current-user';
import { upgradeToPremium } from './upgrade-premium.action';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  frequency: string,
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/monthly' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Starter',
    id: '0',
    href: '/api/auth/signin',
    price: { '1': '$0' },
    frequency: '/monthly',
    discountPrice: { '1': '' },
    description: `To try our product.`,
    features: [
      `Create 1 product`,
      `Get 10 reviews`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Grab It`,
  },
  {
    name: 'Premium',
    id: '1',
    href: '/api/auth/signin',
    price: { '1': '$39' },
    frequency: '/monthly',
    discountPrice: { '1': '' },
    description: `For business that want to grow with the best review experience.`,
    features: [
      `Create infinite products`,
      `Get infinite reviews`,
      `Customize your review page`,
      `Customize your colors`,
      `Get a 'wall of reviews'`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Grab It`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default async function PricingPage() {
  const user = await currentUser();

  const bannerText = '';

  return (
    <div
      className={cn('flex flex-col w-full items-center')} id="pricing"
    >
      <div className="flex w-full flex-col items-center pt-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl lg:w-auto lg:text-center">
            <h1 className="max-w-xs text-center text-2xl font-semibold !leading-tight text-black dark:text-white sm:max-w-none">
              Increase your testimonials by 2
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 dark:text-gray-400">
              We offer a simple plan for everyone.
            </p>

          </div>

          {bannerText ? (
            <div className="my-4 flex w-full justify-center lg:w-auto">
              <p className="w-full rounded-xl bg-indigo-100 px-4 py-3 text-xs text-black dark:bg-indigo-300/30 dark:text-white/80">
                {bannerText}
              </p>
            </div>
          ) : null}
          <div
            className={cn(
              'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none',
              tiers.length === 2 ? 'lg:grid-cols-2' : '',
              tiers.length === 3 ? 'lg:grid-cols-3' : '',
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                    : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                  'max-w-xs ring-1 rounded-3xl p-8 xl:p-10'
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    'text-2xl font-bold tracking-tight',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-400',
                    'mt-4 text-sm leading-6',
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                      'text-4xl font-bold tracking-tight'
                    )}
                  >
                    {
                      tier.price &&
                        typeof tier.price === 'object' &&
                        Object.keys(tier.price).length > 0 &&
                        typeof tier.price[Object.keys(tier.price)[0]] === 'string'
                        ? `${tier.price[Object.keys(tier.price)[0]]}`
                        : ''
                    }
                  </span>

                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    )}
                  >
                    {tier.discountPrice === 'number'}
                  </span>

                  {typeof tier.price !== 'string' ? (
                    <span
                      className={cn(
                        tier.featured
                          ? 'text-gray-300 dark:text-gray-500'
                          : 'dark:text-gray-400 text-gray-600',
                        'text-sm font-semibold leading-6',
                      )}
                    >
                      {tier.frequency}
                    </span>
                  ) : null}
                </p>
                {user ?
                  <form className='w-full'>
                    <Button
                      formAction={async () => {
                        "use server";
                        await upgradeToPremium("");
                      }}
                      size="lg"
                      disabled={tier.soldOut}
                      className={cn(
                        'w-full text-white opacity-80 mt-6'
                      )}
                      variant={'default'}
                    >
                      {tier.soldOut ? 'Sold out' : tier.cta}
                    </Button>
                  </form> :
                  <Link
                    href='/api/auth/signin'
                    aria-describedby={tier.id}
                    className={cn(
                      'flex mt-6 shadow-sm',
                      tier.soldOut ? 'pointer-events-none' : '',
                    )}
                  >
                    <Button
                      size="lg"
                      disabled={tier.soldOut}
                      className={cn(
                        'w-full text-white opacity-80'
                      )}
                      variant={'default'}
                    >
                      {tier.soldOut ? 'Sold out' : "Sign Up"}
                    </Button>
                  </Link>
                }


                <ul
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-700 dark:text-gray-400',
                    'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={cn(
                          tier.featured ? 'text-white' : '',
                          'h-6 w-5 flex-none text-primary',
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
