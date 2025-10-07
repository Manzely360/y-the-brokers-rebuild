import CleanNavbar from "@/components/CleanNavbar";
import SimpleHero from "@/components/SimpleHero";
import SimpleAbout from "@/components/SimpleAbout";
import PropertiesTable from "@/components/PropertiesTable";
import SimpleContact from "@/components/SimpleContact";
import SimpleFooter from "@/components/SimpleFooter";
import FeatureCards from "@/components/FeatureCards";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <CleanNavbar />
      <main className="relative">
        {/* Hero Section */}
        <SimpleHero />

        {/* Feature Cards Section */}
        <FeatureCards />

        {/* About Section */}
        <SimpleAbout />

        {/* Properties Section */}
        <PropertiesTable />

        {/* Contact Section */}
        <SimpleContact />
      </main>
      <SimpleFooter />
    </div>
  );
}
