import Resume from "../../components/Resume";

const EducationSection = () => (
  <div className="max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Education</h2>
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold">University of Washington | Seattle, WA</h3>
      <p className="text-md text-gray-700 dark:text-gray-300 mt-1">B.S. in Human Centered Design & Engineering (HCDE) | Expected June 2027</p>
      <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
        <strong>Related Coursework:</strong> HCDE 302 & 303 (Foundations of HCDE), ME 123 (3D Modeling), Amath (Applied Mathematics), HCDE 313 (User Research)
      </p>
    </div>
  </div>
);

const TechQualificationsSection = () => (
  <div className="max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Technical Qualifications</h2>
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Programming:</strong> Python, Java, JavaScript (Vue.js), HTML, CSS</li>
        <li><strong>Design & Prototyping:</strong> 3D Modeling (Rhino/SolidWorks), Laser Cutting, 3D Printing, Sewing Machine</li>
        <li><strong>Tools & Skills:</strong> Project Management, Git, User Research, Interaction Design, Rapid Prototyping</li>
      </ul>
    </div>
  </div>
);

export default function ResumePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Resume</h1>
      <EducationSection />
      <TechQualificationsSection />
      <Resume />
    </div>
  );
}
