import AnalyticsSvg from "@/imports/NewLandingPage/ui/svgs/AnalyticsSvg";
import AuditIcon from "@/imports/NewLandingPage/ui/svgs/AuditIcon";
import Copy from "@/imports/NewLandingPage/ui/svgs/Copy";
import DownArrow from "@/imports/NewLandingPage/ui/svgs/DownArrow";
import FastIcon from "@/imports/NewLandingPage/ui/svgs/FastIcon";
import AdTypeIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/AdTypeIcon";
import AutoMatchIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/AutoMatchIcon";
import LaunchAdIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/LaunchAdIcon";
import SettingsIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/SettingsIcon";
import GraphLowerSvg from "@/imports/NewLandingPage/ui/svgs/GraphLowerSvg";
import PlayIcon from "@/imports/NewLandingPage/ui/svgs/PlayIcon";
import SlackIcon from "@/imports/NewLandingPage/ui/svgs/SlackIcon";
import UpArrow from "@/imports/NewLandingPage/ui/svgs/UpArrow";
import SaveIcon from "@/imports/NewLandingPage/ui/svgs/SaveIcon";
import DefaultIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/DefaultIcon";
import CopyIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/CopyIcon";
import SyncIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/SyncIcon";
import InfiniteIcon from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/InfiniteIcon";
import ArrivalIcon from "@/imports/NewLandingPage/ui/svgs/ArrivalIcon";
import { FeatureSettingIcon } from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/FeatureSettingIcon";
import { ToggleIcon } from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/ToggleIcon";
import { LinksIcon } from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/LinksIcon";
import NamingTag from "@/imports/NewLandingPage/ui/svgs/FeatureIcons/NamingTag";


export const TESTIMONIALS = [
  {
    quote:
      "Jesus, It's Super Fast. It's Everything I Wanted To Replace My Ads Manager Workflow",
    name: "Henry Boldszar",
    role: "App founder",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "I Used To Dread Having To Get Into Ads Manager To Upload Ads.",
    name: "Henry Boldszar",
    role: "App founder",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "Blip Completely Changed How Our Team Handles Campaigns. It's Fast, Simple, And Super Reliable.",
    name: "Ava Thompson",
    role: "Marketing Lead",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "We Reduced Our Ad Setup Time By 80%. Honestly, I Can’t Imagine Going Back To The Old Way.",
    name: "Liam Carter",
    role: "Growth Manager",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "The UI Is So Intuitive That Even Non-Tech Team Members Can Launch Campaigns Without Help.",
    name: "Sophia Martinez",
    role: "Operations Manager",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "Blip Made Ad Management Feel Effortless. Everything Just Works Seamlessly.",
    name: "Noah Williams",
    role: "Startup Founder",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "Uploading Ads Used To Be A Pain. Now It's Literally A Two-Step Process.",
    name: "Emma Johnson",
    role: "Digital Marketer",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "We Scaled Our Campaigns Faster Than Ever Thanks To The Simplicity Of Blip.",
    name: "James Anderson",
    role: "Performance Marketer",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "Blip Is A Game-Changer. It Saves Time, Reduces Errors, And Improves Team Efficiency.",
    name: "Olivia Brown",
    role: "Marketing Strategist",
    avatar: "/images/landing/Sam.jpeg",
  },
  {
    quote:
      "I Love How Smooth The Workflow Is. It Feels Like It Was Built Exactly For Our Needs.",
    name: "William Davis",
    role: "Product Manager",
    avatar: "/images/landing/Sam.jpeg",
  },
];

export const FEATURES = [
  {
    icon: FastIcon,
    tag: "Fast & Furious",
    title: "Upload multiple creatives at once",
    description:
      "Automate your ad creation flow with lightning-fast bulk uploads, saved settings, and ad previews — all in one clean dashboard.",
    image: "/images/UploadADImage.webp",
    showFrameIcon: true,
    actions: [
      { icon: AdTypeIcon, text: "All ad types supported"},
      { icon: LaunchAdIcon, text: "Launch in Multiple Ad Sets"},
      { icon: AutoMatchIcon, text: "Auto-match 1x1 and 9x16 assets"},
      { icon: SettingsIcon, text: "Import Settings"},
    ],
  },
  {
    icon: ArrivalIcon,
    tag: "Arrival",
    title: "No more upload, download hell.",
    description:
      "No need to spend hours downloading hundreds of ad assets. With Blip, you can one-click deploy media from your Google Drive, Dropbox and soon Frame to Meta Ads Manager.",
    image: "/images/assetsync.webp",
  actions: [
      { icon: AdTypeIcon, text: "All ad types supported"},
      { icon: LaunchAdIcon, text: "Launch in Multiple Ad Sets"},
      { icon: AutoMatchIcon, text: "Auto-match 1x1 and 9x16 assets"},
      { icon: SettingsIcon, text: "Import Settings"},
    ],
  },
  {
    icon: SaveIcon,
    tag: "Saving private templates",
    title: "Apply saved templates for copy, CTA, and links",
    description:
      "Stop wasting time in Meta Ads Manager's clunky interface. Simply select your ideal settings once. We take care of the rest.",
    // image: "/images/assetsync.webp",
    video: "/video/Demo.mp4",
    videolayout: true,
    actions: [
      { icon: CopyIcon, text: "Import Copy From Meta"},
      { icon: SyncIcon, text: "Templates Sync Across the team"},
      { icon: InfiniteIcon, text: "Unlimited Templates"},
      { icon: DefaultIcon, text: "Set Default values"},
    ],
  },
  {
    icon: FeatureSettingIcon,
    tag: "One Click Settings",
    title: "Persistent Settings Per Ad Account",
    description:
      "Stop wasting time in Meta Ads Manager's clunky interface. Simply select your ideal settings once. We take care of the rest.",
    // image: "/images/assetsync.webp",
    video: "/video/Demo.mp4",

    videolayout: true,
    actions: [
      { icon: ToggleIcon, text: "Toggle all Meta Creative Enhancements"},
      { icon: LinksIcon, text: "Import UTMs, Links and set display links"},
      { icon: NamingTag, text: "Fully Customizable Ad Naming Conventions"},
    ],
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    title: "Starter",
    price: 49,
    duration: "month",
    badge: "Best for Brands",
    features: [
      "Unlimited Ad Launches",
      "Unlimited Ad Accounts",
      "Bulk publish ads using existing Post IDs, or normal duplication",
      "Supports Standard ads, Carousels, Flex, Partnership ads, and more",
      "Google Drive and Dropbox Integration",
    ],
    cta: "Start your 7 Day Free Trial",
  },
  {
    id: "light",
    title: "Light",
    price: 199,
    duration: "month",
    badge: "Best for Freelancers",
    features: [
      "Unlimited Ad Launches",
      "Unlimited Ad Accounts",
      "Bulk publish ads using existing Post IDs, or normal duplication",
      "Supports Standard ads, Carousels, Flex, Partnership ads, and more",
      "Google Drive and Dropbox Integration",
    ],
    cta: "Start your 7 Day Free Trial",
  },
  {
    id: "pro",
    title: "Pro",
    price: 370,
    duration: "month",
    badge: "Best for Agencies",
    features: [
      "Unlimited Ad Launches",
      "Unlimited Ad Accounts",
      "Bulk publish ads using existing Post IDs, or normal duplication",
      "Supports Standard ads, Carousels, Flex, Partnership ads, and more",
      "Google Drive and Dropbox Integration",
    ],
    cta: "Start your 7 Day Free Trial",
  },
];

//Analytics Section

export const Tabs = [
  "Recommendtaions (2)",
  "Anomalies Detected",
  "Poor performing Ads",
];


export const DataAnalytics = [
  {
    title: "Budget Recommendations",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: AnalyticsSvg,
  },
  {
    title: "Poor Performers",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: GraphLowerSvg,
  },
  {
    title: "Account Audits",
    description:
      "Through a combination of auto detection and user selection we help you make the right type of ad based on campaign and ad set selected.",
    image: GraphLowerSvg,
  },
];


export const StatsData = [
  {
    svg: PlayIcon,
    iconBg: "#FFB7A2",
    text: "Ad Set  CPA is 130% more than usual",
    buttonText: "Pause",
    buttonBorder: "#DF0000",
    buttonBackground: "#F47200",
    bulletIconColor: "#FFB7A2",
  },
  {
    svg: DownArrow,
    iconBg: "#FFB803",
    text: "CPA has increased 20% in last week",
    buttonText: "Reduce",
    buttonBorder: "#DFAE00",
    buttonBackground: "#FFB803",
    bulletIconColor: "#FFFDA5",
  },
  {
    svg: UpArrow,
    iconBg: "#8BAEFF",
    text: "Scale these 8 winner ads",
    buttonText: "Duplicate Ads",
    buttonBorder: "#8BAEFF",
    buttonBackground: "#476FFF",
    bulletIconColor: "#47D7FF",
  },
];


export const CTAButtonData = [
  {
    text: "Account Audit",
    icon: AuditIcon,
    variant: "white",
  },
  {
    text: "Account Summary",
    icon: Copy,
    variant: "white",
  },
  {
    text: "Request from slack",
    icon: SlackIcon,
    variant: "brand",
  },
] as const;


export const SUPPORT_LEFT_CARDS = [
  {
    id: 1,
    title: "AI Placement Customization",
    description:
      "Upload media of different aspect ratios to group together for one ad. We auto detect assets that go together for different placements with the click of a button!",
    image: "/images/AiPlacementImage.webp",
  },
  {
    id: 4,
    title: "Instagram Organic Whitelisting",
    description:
      "Boost posts from your instagram feed. Find partnership posts and whitelist tagged content!",
    image: "/images/PostIDImage.webp",
  },
  {
    id: 7,
    title: "Post ID Scaling & Ad Duplication",
    description:
      "See all your forms and select a form to post when needed. We detect relevant ad sets.",
    image: "/images/PidDuplicationImg.webp",
  },
];

export const SUPPORT_RIGHT_CARDS = [
  {
    id: 2,
    title: "Flex Ads",
    description:
      "Upload multiple media and text options to test for the same ad and meta will pick test and pick",
    image: "/images/FlexAD.webp",
  },
  {
    id: 3,
    title: "Carousel Ads",
    description:
      "Easily rearrange cards, give unique text for each card or apply the same to all",
    image: "/images/CarouselAds.webp",
  },
  {
    id: 5,
    title: "Lead Gen Form",
    description:
      "See all your forms and select a form to post when needed. We detect relevant ad sets.",
    image: "/images/FormImage.webp",
  },
  {
    id: 6,
    title: "Partnership Ads",
    description:
      "The team has more than a decade of experience in performance marketing.",
    image: "/images/PartnershipADsImage.webp",
  },
];


