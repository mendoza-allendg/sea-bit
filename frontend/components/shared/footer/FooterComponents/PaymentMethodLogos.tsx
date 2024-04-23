import Image from 'next/image'

const PAYMENT_METHOD_LOGOS = [
  {
    text: 'Visa',
    src: '/payment_logos/visa.png',
  },
  {
    text: 'Mastercard',
    src: '/payment_logos/mastercard.png',
  },
  {
    text: 'G-Cash',
    src: '/payment_logos/Gcash.png',
  },
  {
    text: 'GrabPay',
    src: '/payment_logos/GrabPay.png',
  },
  {
    text: 'PayMaya',
    src: '/payment_logos/PayMaya.png',
  },
  {
    text: 'BPI',
    src: '/payment_logos/BPI.png',
  },
  {
    text: 'Security Bank',
    src: '/payment_logos/SecurityBank.png',
  },
  {
    text: 'AUB',
    src: '/payment_logos/AUB.png',
  },
  {
    text: 'BillEase',
    src: '/payment_logos/BillEase.png',
  },
  {
    text: 'CoinsPH',
    src: '/payment_logos/CoinsPH.png',
  },
  {
    text: '7-11',
    src: '/payment_logos/7_eleven.png',
  },
  {
    text: 'Cebuana Lhuiller',
    src: '/payment_logos/CebuanaLL.png',
  },
  {
    text: 'M Lhuiller',
    src: '/payment_logos/M_LL.png',
  },
  {
    text: 'Landbank',
    src: '/payment_logos/Landbank.jpg',
  },
]

export const PaymentMethodLogos = () => {
  return (
    <div className="ml-8 flex min-w-56 flex-wrap justify-start">
      {PAYMENT_METHOD_LOGOS.map((pmeth, i) => (
        <Image
          className="mt-1 w-14 rounded-lg border"
          key={i}
          src={pmeth.src}
          alt={pmeth.text}
          width={500}
          height={500}
        />
      ))}
    </div>
  )
}
