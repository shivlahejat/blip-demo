import PrivacyIcon from "@/imports/NewLandingPage/ui/svgs/PrivacyIcon"
import TermsOfServiceIcon from "@/imports/NewLandingPage/ui/svgs/TermsOfServiceIcon"

export const ROUTES = [

    {
        name: "Features",
        path: "features",
    },
    {
        name: "Pricing",
        path: "pricing",
    },
    {
        name: "Blog",
        path: "blog",
    },
    {
        name: "Analytics",
        path: "analytics",
    },
]
  
export const POLICY_ROUTES = [
    {
        name: "Privacy Policy",
        icon: PrivacyIcon,
        path: "https://app.withblip.com/privacy-policy",
    },
    {
        name: "Terms of Service",
        icon: TermsOfServiceIcon,
        path: "https://app.withblip.com/terms-of-service",
    },

]