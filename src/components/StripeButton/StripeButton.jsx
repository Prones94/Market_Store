import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I6t7xIf1Oz5Z3Mk8SgyoQD46xZCwEP5v37n6urZg8MTixhgEj1egk9KRxiv95Hudw7gAQQVFeI75x6KLQOpX5J500RGsoCqPw';

  const onToken= token => {
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Market Inc."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton