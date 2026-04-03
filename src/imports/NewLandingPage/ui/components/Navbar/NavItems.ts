import AnalyticsIcon from "@/imports/NewLandingPage/ui/svgs/AnalyticsIcon";
import AnalyticsSvg from "@/imports/NewLandingPage/ui/svgs/AnalyticsSvg";
import BlogIcon from "@/imports/NewLandingPage/ui/svgs/BlogIcon";
import FeatureIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcon";
import PricingIcon from "@/imports/NewLandingPage/ui/svgs/PricingIcon";

export interface NavItem {
  id: string;
  label: string;
  icon: any;
}

export const NAV_ITEMS: any[] = [
  { id: "features", label: "Features", icon: FeatureIcon},
  { id: "pricing", label: "Pricing", icon: PricingIcon},
  { id: "blog", label: "Blog", icon: BlogIcon },
  { id: "analytics", label: "Analytics", icon: AnalyticsIcon },
];

