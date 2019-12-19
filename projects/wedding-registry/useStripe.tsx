import { useRef, useState, useEffect } from "react"

declare var Stripe: undefined | any
declare var window: undefined | any

export const useStripe = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [stripe, setStripe] = useState<any>(undefined)
  const [loadingState, setLoadingState] = useState<'dne' | 'loading' | 'loaded'>(
    !(process.browser && window.Stripe) ? 'dne' : 'loaded'
  )

  useEffect(() => {
    if (process.browser && containerRef.current && loadingState === 'dne') {
      setLoadingState('loading')

      var script = document.createElement('script')
      script.onload = function() {
        setLoadingState('loaded')
      }
      script.src = 'https://js.stripe.com/v3/'
      document.head.appendChild(script)
    }
  }, [process.browser])

  useEffect(() => {
    if (loadingState === 'loaded' && Stripe !== undefined) {
      const stripe = Stripe('pk_live_Llp3ingWPhiXLLSm9fsnRGcd', {betas: ['checkout_beta_3']});
      setStripe(stripe)
    }
  }, [loadingState])

  return [containerRef, stripe]

}