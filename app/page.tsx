import Hero from "@/Components/HomeUI/Hero";
import DoctorDashboard from "@/Components/Dashboard/DoctorDashboard";
export default function Home() {
  return (
    <div className="mx-6 space-y-[8rem] ">
      <Hero />
      <DoctorDashboard />
    </div>
  );
}
