"use client";

import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import DummyPageContent from "@/components/bulk-ad-upload/BulkAdUpload";

export default function DummyPage() {
  return (
    <div>
      <HeaderSection isScrolled={false} />
      <DummyPageContent />
      <div style={{ padding: "20px" }}>
        <FooterSection isMobile={false} />
       </div>
    </div>
  );
}