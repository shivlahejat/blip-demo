"use client";
import "@/customcss/BulkAdUpload.css";
import { useEffect } from "react";
import Image from "next/image";

export default function DummyPageContent() {

useEffect(() => {
  const buttons = document.querySelectorAll(".accordion-header");

  const handleClick = (e) => {
    const button = e.currentTarget;

    const item = button.closest(".accordion-item");

    const active = document.querySelector(".accordion-item.active");

    if (active && active !== item) {
      active.classList.remove("active");
    }

    item.classList.toggle("active");
  };

  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  return () => {
    buttons.forEach((button) => {
      button.removeEventListener("click", handleClick);
    });
  };
}, []);

return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-wrapper">

          <div className="hero-content">
            <h1>
              Launch 100+ Facebook Ads in Minutes, Not Hours
            </h1>

            <p>
              Automate your Meta Ads workflow with our intelligent bulk upload tool. Scale campaigns faster, eliminate manual errors, and save your team hours every week.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn primary"><b>7 days Free Trial</b> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg></a>
              <a href="#" className="btn secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play w-4 h-4"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                  <b> Book a Demo</b>
                </a>
            </div>


            <div className="hero-features">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#00A841"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> No credit card required</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#00A841"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> 14-day free trial</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#00A841"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> Cancel anytime</span>
            </div>
          </div>

          <div className="hero-image">
            <Image src="/section-1.jpeg" alt="Facebook Ads Dashboard" width={500} height={468} />
          </div>

        </div>
      </section>

      {/* ================= HIDDEN COST SECTION ================= */}
      <section className="hidden-cost py-36">
        <div className="container">

          {/* Heading */}
          <div className="section-header">
            <h2>The Hidden Cost of Manual Ad Management</h2>
            <p>Performance teams waste countless hours on repetitive tasks that automation <br></br> should handle.</p>
          </div>

          {/* Cards */}
          <div className="cost-grid">

            {/* Card 1 */}
            <div className="cost-card">
              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#D92F54"><path d="m626.72-296.56 36.56-36.57L507.23-491.5v-195.22h-51.18v217.9l170.67 172.26ZM480.32-98.67q-78.68 0-148.33-30.19-69.66-30.19-121.27-81.76-51.61-51.57-81.83-121.16T98.67-480.05q0-78.93 30.25-148.29 30.25-69.37 81.92-121.15T332-831.3q69.49-30.03 148.05-30.03 78.92 0 148.28 30 69.35 30.01 121.14 81.76 51.8 51.75 81.83 121.06 30.03 69.32 30.03 148.28 0 78.95-30 148.26-30.01 69.32-81.74 121.03-51.74 51.72-121.04 81.99-69.3 30.28-148.23 30.28ZM480-480Zm0 330.15q136.77 0 233.46-96.44T810.15-480q0-136.77-96.69-233.46t-233.79-96.69q-137.11 0-233.46 96.69-96.36 96.69-96.36 233.79 0 137.11 96.44 233.46 96.44 96.36 233.71 96.36Z"/></svg></div>
              <h3>Manual ad creation takes hours</h3>
              <p>
                Creating hundreds of ads manually is time-consuming and pulls your team away from strategic work.
              </p>
            </div>

            {/* Card 2 */}
            <div className="cost-card">
              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#D92F54"><path d="M505.17-290.15q10.16-10.16 10.16-25.17 0-15.01-10.15-25.18-10.16-10.17-25.17-10.17-15.01 0-25.18 10.16-10.16 10.15-10.16 25.17 0 15.01 10.15 25.17Q464.98-280 479.99-280q15.01 0 25.18-10.15Zm-56.5-145.18h66.66V-684h-66.66v248.67ZM480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z"/></svg></div>
              <h3>Human errors in large campaigns</h3>
              <p>
                Copy-paste mistakes, wrong targeting, and broken links cost money and damage campaign performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="cost-card">
              <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#D92F54"><path d="M648.67-240v-66.67H768L538-536 373.33-371.33 80-664.67 127.33-712l245.34 245.33 164.66-164.66L814-354.67v-116.66h66V-240H648.67Z"/></svg></div>
              <h3>Scaling campaigns is difficult</h3>
              <p>
                Traditional workflows can&apos;t keep up when you need to launch multiple campaigns across different audiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= BULK UPLOAD TOOL SECTION ================= */}
      <section className="bulk-tool py-36">
        <div className="container bulk-wrapper">

          {/* LEFT CARD */}
          <div className="bulk-card">

            <div className="upload-header">
              <div className="upload-icon"><svg xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF"><path d="M446.67-315.33v-356L332-556.67l-47.33-48L480-800l195.33 195.33-47.33 48-114.67-114.66v356h-66.66ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"/></svg></div>
              <div className="upload-text">
                <p className="label">Bulk Upload</p>
                <h4>1,247 ads</h4>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress"></div>
            </div>

            <div className="processing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap w-4 h-4 text-yellow-500"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              <span>Processing at 250 ads/minute</span>
            </div>
            
            {/* Stats */}
            <div className="stats">
              <div className="stat-box">
                <h3>98.5%</h3>
                <p>Success Rate</p>
              </div>
              <div className="stat-box">
                <h3>4.2 min</h3>
                <p>Avg. Upload Time</p>
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="bulk-content">
            <h2>Facebook Ads Bulk Upload Tool</h2>

            <p>
             Transform your ad management workflow with intelligent automation. Create, launch, and manage hundreds of Facebook ads simultaneously with zero manual effort.
            </p>

            <ul className="bulk-features">
              <li>Upload hundreds of ads in one go</li>
              <li>CSV / template-based uploads</li>
              <li>Automated campaign structuring</li>
              <li>Real-time error validation</li>
              <li>Bulk edit and update campaigns</li>
              <li>Preserve campaign history</li>
            </ul>

            <div><a href="#" className="btn-dark">See How It Works</a></div>
          </div>

        </div>
      </section>

      {/* ================= FEATURE BLOCKS ================= */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features for Every Stage</h2>
          <p className="section-subtitle">
            Everything you need to scale your Facebook ad campaigns efficiently and error-free.
          </p>

          
          {/* Row 1 */}
          <div className="feature-row">
            <div className="feature-text">
              <h3>Meta Ads Bulk Upload</h3>
              <p>
                Launch campaigns at scale with our powerful bulk upload engine. Process hundreds of ads in minutes with intelligent validation and error checking.
              </p>
              <ul>
                <li>Upload up to 1,000 ads simultaneously</li>
                <li>Automatic campaign structure creation</li>
                <li>Smart duplication detection</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="feature-image">
              <Image src="/section1.png" alt="Feature" width={500} height={400}/>
            </div>
          </div>

          {/* Row 2 */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <h3>Facebook Ads Bulk Uploader</h3>
              <p>
                Drag & drop your campaign data or use our CSV templates. Our intelligent parser validates every field before upload, preventing costly mistakes.
              </p>
              <ul>
                <li>Drag & drop CSV file uploads</li>
                <li>Pre-built campaign templates</li>
                <li>Real-time error validation & suggestions</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="feature-image">
              <Image src="/section1.png" alt="Feature" width={500} height={400}/>
            </div>
          </div>

          {/* Row 3 */}
          <div className="feature-row">
            <div className="feature-text">
              <h3>Bulk Upload Facebook Ads</h3>
              <p>
               Duplicate high-performing campaigns across audiences and placements. Reuse existing creatives using post IDs for faster deployment.
              </p>
              <ul>
                <li>One-click campaign duplication</li>
                <li>Reuse creatives via post IDs</li>
                <li>Cross-account bulk publishing</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="feature-image">
              <Image src="/section1.png" alt="Feature" width={500} height={400}/>
            </div>
          </div>

          {/* Row 4 */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <h3>Facebook Ads Bulk Upload Automation</h3>
              <p>
                Set up automated workflows that create and launch campaigns on schedule. Use templates to ensure consistency across all your ad accounts.
              </p>
              <ul>
                <li>Scheduled campaign launches</li>
                <li>Template-based ad creation</li>
                <li>API integration for custom workflows</li>
              </ul>
              <a href="#" className="learn-more">Learn More</a>
            </div>

            <div className="feature-image">
              <Image src="/section1.png" alt="Feature" width={500} height={400} />
            </div>
          </div>

        </div>
      </section>

        {/* ================= HOW IT WORKS ================= */}
      <section className="hidden-works py-36">
        <div className="container">

          {/* Heading */}
          <div className="section-header">
            <h2>How It Works</h2>
          <p>
                Three simple steps to transform your ad campaign workflow from hours to minutes.
          </p>
          </div>

          {/* Cards */}
          <div className="cost-grid line-grid">

            {/* Card 1 */}
            <div className="cost-card card-relative">
              <div className="upload-icon"><svg xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF"><path d="M446.67-315.33v-356L332-556.67l-47.33-48L480-800l195.33 195.33-47.33 48-114.67-114.66v356h-66.66ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"></path></svg></div>
              <div className="counting-work">01</div>
              <h3>Upload CSV / Creatives</h3>
              <p>
                Import your campaign data using our CSV template or drag & drop your files. Upload ad creatives, copy, and targeting parameters in bulk.
              </p>
            </div>

            {/* Card 2 */}
            <div className="cost-card card-relative">
              <div className="upload-icon"><svg xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 -960 960 960" width="35px" fill="#ffffff"><path d="m382-80-18.67-126.67q-17-6.33-34.83-16.66-17.83-10.34-32.17-21.67L178-192.33 79.33-365l106.34-78.67q-1.67-8.33-2-18.16-.34-9.84-.34-18.17 0-8.33.34-18.17.33-9.83 2-18.16L79.33-595 178-767.67 296.33-715q14.34-11.33 32.34-21.67 18-10.33 34.66-16L382-880h196l18.67 126.67q17 6.33 35.16 16.33 18.17 10 31.84 22L782-767.67 880.67-595l-106.34 77.33q1.67 9 2 18.84.34 9.83.34 18.83 0 9-.34 18.5Q776-452 774-443l106.33 78-98.66 172.67-118-52.67q-14.34 11.33-32 22-17.67 10.67-35 16.33L578-80H382Zm55.33-66.67h85l14-110q32.34-8 60.84-24.5T649-321l103.67 44.33 39.66-70.66L701-415q4.33-16 6.67-32.17Q710-463.33 710-480q0-16.67-2-32.83-2-16.17-7-32.17l91.33-67.67-39.66-70.66L649-638.67q-22.67-25-50.83-41.83-28.17-16.83-61.84-22.83l-13.66-110h-85l-14 110q-33 7.33-61.5 23.83T311-639l-103.67-44.33-39.66 70.66L259-545.33Q254.67-529 252.33-513 250-497 250-480q0 16.67 2.33 32.67 2.34 16 6.67 32.33l-91.33 67.67 39.66 70.66L311-321.33q23.33 23.66 51.83 40.16 28.5 16.5 60.84 24.5l13.66 110Zm43.34-200q55.33 0 94.33-39T614-480q0-55.33-39-94.33t-94.33-39q-55.67 0-94.5 39-38.84 39-38.84 94.33t38.84 94.33q38.83 39 94.5 39ZM480-480Z"/></svg></div>
              <div className="counting-work">02</div>
              <h3>Map Fields & Preview</h3>
              <p>
                Our smart mapper automatically detects fields and validates your data. Preview campaigns, fix errors, and adjust settings before launch.
              </p>
            </div>

            {/* Card 3 */}
            <div className="cost-card card-relative">
              <div className="upload-icon"><svg xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF"><path d="m200-553.67 96.67 41Q313.33-546 332-578q18.67-32 40-62l-71.33-14.33L200-553.67ZM350-472l126.67 126.33q52-22.66 101.33-55.66T662-469q77.33-77.33 115.83-162.5T816.67-812q-95.34.33-180.67 38.83-85.33 38.5-162.67 115.84-34.66 34.66-67.66 84Q372.67-524 350-472Zm191-137.5q0-30.83 21-51.83t52-21q31 0 52 21t21 51.83q0 30.83-21 51.83t-52 21q-31 0-52-21t-21-51.83Zm17.33 414.17L659-296l-14.33-71.33q-30 21.33-62 39.83t-65.34 35.17l41 97ZM880-875.67q12.33 131-30.5 243.84Q806.67-519 706-418.33q-.67.66-1.33 1.33-.67.67-1.34 1.33l21.34 106.34Q728-292.67 723-277q-5 15.67-17 27.67L536-78.67l-84.67-197.66L281-446.67 83.33-531.33l170.34-170q12-12 27.83-17 15.83-5 32.5-1.67l106.33 21.33q.67-.66 1.34-1 .66-.33 1.33-1 100.67-100.66 213.33-144Q749-888 880-875.67Zm-728.33 552q35-35 85.5-35.5t85.5 34.5q35 35 34.5 85.5t-35.5 85.5q-25.67 25.67-81.5 43-55.84 17.34-162.84 32Q92-185.67 109-241.83q17-56.17 42.67-81.84Zm47 47.34Q186-263 175.33-232.83q-10.66 30.16-17.33 72.5 42.33-6.67 72.5-17.17 30.17-10.5 43.5-23.17 16.67-15.33 17.33-38Q292-261.33 276-278q-16.67-16-39.33-15.5-22.67.5-38 17.17Z"/></svg></div>
              <div className="counting-work">03</div>
              <h3>Launch Campaigns Instantly</h3>
              <p>
                Hit publish and watch your campaigns go live. Track progress in real-time with detailed logs and instant notifications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TEAM THAT SCALE */}
      <section className="teams py-36">
        <div className="container">
        <h2  className="text-center team-head">Built for Teams That Scale</h2>
        <p className="subtitle">
          Whether you&apos;re an agency, brand, or performance team, our bulk upload tool adapts to your workflow.
        </p>
        
            <div className="cards">
        <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 w-6 h-6 text-primary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg></div>
        <h3>Agencies Managing Multiple Clients</h3>
        <p>
          Handle dozens of client accounts efficiently. Bulk upload campaigns across different brands, maintain consistent quality, and scale your agency operations without adding headcount.
        </p>
        <div className="build-stats">
        <div className="build-stat">
        <strong>85%</strong>
        <span>Time Saved</span>
        </div>
        <div className="build-stat">
        <strong>3x</strong>
        <span>Client Capacity</span>
        </div>
        </div>
        </div>
        
              <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag w-6 h-6 text-primary"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div>
        <h3>E-commerce Brands Scaling Ads</h3>
        <p>
         Launch seasonal campaigns, product launches, and promotional ads at scale. Test multiple creatives and audiences simultaneously to find winning combinations faster.
        </p>
        <div className="build-stats">
        <div className="build-stat">
        <strong>10x</strong>
        <span>Faster Launch</span>
        </div>
        <div className="build-stat">
        <strong>95%</strong>
        <span>Error Reduction</span>
        </div>
        </div>
        </div>
        
              <div className="card">
        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-6 h-6 text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div>
        <h3>Performance Marketing Teams</h3>
        <p>
         Run sophisticated A/B tests across hundreds of ad variations. Automate repetitive tasks and focus your team&apos;s energy on strategy, creative, and optimization.
        </p>
        <div className="build-stats">
        <div className="build-stat">
        <strong>500+</strong>
        <span>Campaign Scale</span>
        </div>
        <div className="build-stat">
        <strong>4x</strong>
        <span>Team Efficiency</span>
        </div>
        </div>
        </div>
        
            </div>
        </div>
      </section>

    

      {/* ===== STATS + TESTIMONIALS ===== */}
      <section className="stats-testimonials py-36">
        <div className="container">

          {/* Stats */}
          <div className="stats mb-96">
            <div className="stat">
              <h3>10x</h3>
              <p>Faster Ad Launch</p>
            </div>
            <div className="stat">
              <h3>80%</h3>
              <p>Reduce Manual Work</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Error Reduction</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Teams Trust Us</p>
            </div>
          </div>

          {/* Heading */}
          <div className="section-header">
            <h2>Trusted by Performance Teams Worldwide</h2>
            <p>See how leading agencies and brands are scaling their Facebook ad campaigns.</p>
          </div>

          {/* Testimonials */}
          <div className="testimonials">

            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="quoute-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-8 h-8 text-primary/20 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
              </div>
              <p className="quote">
                &ldquo;Blip&apos;s bulk upload tool has completely transformed how we manage client campaigns. What used to take us 2 full days now takes 20 minutes.&rdquo;
              </p>
              <div className="build-stats">
              <div className="user">
                <div className="avatar">SC</div>
                <div className="profile">
                  <div>Sarah Chen</div>
                  <p>Performance Director, Growth Agency Co.</p>
                </div>
              </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="quoute-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-8 h-8 text-primary/20 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
              </div>
              <p className="quote">
                &ldquo;We scaled from managing 50 ads to 500+ without hiring additional staff. The automation is flawless and the error checking has saved us thousands.&rdquo;
              </p>
              <div className="build-stats">
              <div className="user">
                <div className="avatar">MR</div>
                <div className="profile">
                  <div>Michael Rodriguez</div>
                  <p>Head of Marketing, E-commerce Brand</p>
                </div>
              </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="quoute-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-8 h-8 text-primary/20 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
              </div>
              <p className="quote">
                &ldquo;The CSV upload feature is incredibly intuitive. Our team was up and running in minutes, and the ROI was immediate. Can&apos;t imagine going back to manual uploads.&rdquo;
              </p>
              <div className="build-stats">

              <div className="user">
                <div className="avatar">JP</div>
                <div className="profile">
                  <div>Jessica Park</div>
                  <p>Paid Media Lead, Tech Startup</p>
                </div>
              </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ===== DARK API SECTION ===== */}
      <section className="meta-api py-36">
        <div className="container api-grid"> 

          {/* Left */}
          <div className="api-content">
            <span className="badge">Seamless Integration</span>

            <h2>Built on Meta&apos;s Official API</h2>

            <p>
              Connect directly to your Facebook Ads accounts with enterprise-grade security. Our platform uses Meta&apos;s official Marketing API for reliable, real-time campaign management.
            </p>

            <ul className="features-build">
              <li>Direct Meta Business Suite integration</li>
              <li>Facebook Ads Manager API access </li>
              <li>Multi-account management</li>
              <li>Real-time sync with Meta platform</li>
              <li>Automated campaign updates</li>
              <li>Webhook support for custom workflows</li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="api-card">
            <div className="card-header">
              <div className="icon-f"><svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="#000000" width={37}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></div>
              <div className="api-head">
                <strong>Meta Business</strong>
                <p>Official Integration Partner</p>
              </div>
            </div>
            <div className="build-stats">
              <div className="card-stats">
                <div className="card-stat">
                  <h4>99.9%</h4>
                  <span>API Uptime</span>
                </div>
                <div className="card-stat">
                  <h4>&lt; 100ms</h4>
                  <span>Response Time</span>
                </div>
              </div>
            </div>
           <div className="build-stats">
              <div className="card-footer">
                <svg className="w-5 h-5 text-green-400" fill="#4ade80" viewBox="0 0 20 20" width={20} height={20}><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span>Enterprise-grade security & compliance</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    

      {/* ================= CTA ================= */}
      <section className="facebookad py-36">
        <div className="container">
          <div className="sub-section">
            <h2 className="sub-title">Scale Your Facebook Ads Without <br></br> the Chaos</h2>
            <p className="sub-subtitle">
                Join hundreds of performance teams saving 10+ hours every week with intelligent bulk <br></br> upload automation.
            </p>
            
              <div className="sub-buttons">
            <a href="#" className="btn primary"><b>Start Free Trial</b> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path></svg></a>
            <a href="#" className="btn secondary"><b> Book a Demo</b></a></div>
            
            
              <div className="sub-features">
            <div className="sub-feature"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00a63e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 14-day free trial</div>
            <div className="sub-feature"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00a63e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> No credit card required</div>
            <div className="sub-feature"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00a63e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-green-600"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Cancel anytime</div>
            </div>
            
              <div className="sub-divider"></div>
            
              <div className="sub-badges">
            <div className="sub-badge"><svg className="w-5 h-5 text-green-400" fill="#00a63e" viewBox="0 0 20 20" width="20" height="20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> SOC 2 Type II Certified</div>
            <div className="sub-badge"><svg className="w-5 h-5 text-green-400" fill="#00a63e" viewBox="0 0 20 20" width="20" height="20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> GDPR Compliant</div>
            <div className="sub-badge"><svg className="w-5 h-5 text-green-400" fill="#00a63e" viewBox="0 0 20 20" width="20" height="20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Meta Business Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      {/* ================= FAQ ACCORDION ================= */}
      <section className="faq py-36">
        <div className="container">
          <h2 className="center faq-head">Frequently Asked Questions</h2>
          <p className="center faq-p">Everything you need to know about bulk uploading Facebook ads with our platform.</p>
          <div className="center">
          <div className="accordion">

            {/* Item 1 */}
            <div className="accordion-item">
              <div className="accordion-box">
                  <button className="accordion-header">
                    How does Facebook ads bulk upload work?
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Our bulk upload tool allows you to create and launch hundreds of Facebook ads simultaneously using CSV files or our drag-and-drop interface. Simply prepare your campaign data (ad copy, targeting, creatives, budgets), upload it to our platform, and our system validates everything before publishing directly to Facebook Ads Manager via the official Meta API.
                    </p>
                  </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                Is this tool safe to use with Meta Ads?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  Absolutely. We&apos;re an official Meta Business Partner and use Meta&apos;s official Marketing API for all operations. Our platform is SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit and at rest, and we never store your ad account credentials. Your connection to Meta is secured through OAuth 2.0 authentication.
                </p>
              </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                Can I upload ads using CSV?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  Yes! CSV upload is one of our core features. We provide pre-built templates that map to all Facebook ad fields including campaign structure, targeting parameters, ad copy, creative assets, and budget settings. Our intelligent parser validates your CSV in real-time, highlighting errors before upload so you can fix them instantly.
                </p>
              </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                Does it support bulk duplication?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  Yes, bulk duplication is fully supported. You can duplicate entire campaigns, ad sets, or individual ads across different audiences, placements, or ad accounts. You can also reuse existing creatives by referencing post IDs, making it easy to scale winning campaigns without re-uploading assets.
                  </p>
              </div>
              </div>
            </div>

             {/* Item 5 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                What&apos;s the maximum number of ads I can upload at once?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  You can upload up to 1,000 ads in a single batch on our Pro and Enterprise plans. The upload typically processes at 250 ads per minute. If you need to launch more than 1,000 ads, you can queue multiple batches that process sequentially.
                  </p>
              </div>
              </div>
            </div>

             {/* Item 6 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                How long does it take to launch campaigns?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  Most bulk uploads complete within 4-6 minutes for batches of 100-500 ads. The exact time depends on factors like creative upload size, Meta API response times, and validation complexity. You&apos;ll see real-time progress updates and can continue working while campaigns publish in the background.
                  </p>
              </div>
              </div>
            </div>

             {/* Item 7 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                Can I schedule campaigns to launch later?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                  Yes, our automation workflows allow you to schedule campaign launches for specific dates and times. You can also set up recurring templates that automatically create and launch campaigns on a schedule, perfect for regular promotions or seasonal campaigns.
                  </p>
              </div>
              </div>
            </div>

             {/* Item 8 */}
            <div className="accordion-item">
              <div className="accordion-box">
              <button className="accordion-header">
                What happens if there&apos;s an error during upload?
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#717182" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></span>
              </button>
              <div className="accordion-content">
                <p>
                 Our system validates all data before attempting to publish. If errors are detected, we&apos;ll show you exactly what needs to be fixed with specific line numbers and suggestions. You can correct errors and retry immediately. If an error occurs during publishing (like a Meta API issue), we&apos;ll pause the batch, notify you, and allow you to resume once resolved.
                  </p>
              </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
