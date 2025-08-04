import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Tamab',
  description: 'Read our terms and conditions. Please review these terms carefully before using our services.',
  keywords: 'terms, conditions, legal, agreement, Tamab',
  openGraph: {
    title: 'Terms and Conditions - Tamab',
    description: 'Read our terms and conditions. Please review these terms carefully before using our services.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-stone prose-lg max-w-none text-gray-600">
            <section>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Tamab&apos;s website for personal,
                non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Tamab&apos;s website are provided on an &apos;as is&apos; basis.
                Tamab makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2>4. Limitations</h2>
              <p>
                In no event shall Tamab or its suppliers be liable for any damages
                (including, without limitation, damages for loss of data or profit,
                or due to business interruption) arising out of the use or inability
                to use the materials on Tamab&apos;s website.
              </p>
            </section>

            <section>
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Tamab&apos;s website could include technical,
                typographical, or photographic errors. Tamab does not warrant that
                any of the materials on its website are accurate, complete, or
                current.
              </p>
            </section>

            <section>
              <h2>6. Links</h2>
              <p>
                Tamab has not reviewed all of the sites linked to its website and is
                not responsible for the contents of any such linked site. The
                inclusion of any link does not imply endorsement by Tamab of the
                site.
              </p>
            </section>

            <section>
              <h2>7. Modifications</h2>
              <p>
                Tamab may revise these terms of service for its website at any time
                without notice. By using this website, you are agreeing to be bound
                by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of Cambodia and you irrevocably submit to
                the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}