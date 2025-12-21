export const analytics = {
  trackEvent: (eventName, eventData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventData);
    }
  },

  trackPageView: (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_path: url,
      });
    }
  },

  trackError: (error, context) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: `${context}: ${error.message}`,
        fatal: false,
      });
    }
  },
};
