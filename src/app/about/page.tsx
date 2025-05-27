export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About LawX</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to LawX, your premier destination for insightful legal analysis and commentary on current trends and developments in the legal world.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          At LawX, we strive to provide clear, accessible, and comprehensive analysis of complex legal issues. Our goal is to help legal professionals, students, and interested readers stay informed about important developments in the legal landscape.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">In-depth analysis of current legal trends</li>
          <li className="mb-2">Commentary on significant court decisions</li>
          <li className="mb-2">Insights into emerging legal issues</li>
          <li className="mb-2">Expert perspectives on legal developments</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
        <p className="mb-6">
          We are committed to providing accurate, well-researched, and timely content that helps our readers understand the evolving legal landscape. While our content is informative, it should not be considered legal advice, and readers should consult with qualified legal professionals for specific legal matters.
        </p>
      </div>
    </div>
  );
}
