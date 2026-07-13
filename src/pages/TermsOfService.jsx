import { Link } from 'react-router-dom';

function TermsOfService({ app }) {
  if (app === 'Bensy') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Terms of Service - Bensy</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: June 19, 2026</p>
            <p>These Terms of Service ("Terms") govern your access to and use of Bensy, operated by BaskomLabs.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the App, you confirm that you are at least 13 years old and agree to comply with these Terms.</p>
            
            <h3>2. Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, BaskomLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'PembacaKUE') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Terms of Service - PembacaKUE</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: July 13, 2026</p>
            <p>These Terms of Service ("Terms") govern your access to and use of PembacaKUE, operated by BaskomLabs.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the App, you agree to comply with these Terms. You also agree to use this application only for lawful purposes, such as verifying your own identity or identities you are explicitly authorized to process.</p>
            
            <h3>2. Prohibited Conduct</h3>
            <p>You may not use this application to facilitate identity theft, unauthorized data harvesting, or any other illegal activities.</p>
            
            <h3>3. Limitation of Liability</h3>
            <p>The App is provided "as is". To the maximum extent permitted by law, BaskomLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the application.</p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default TermsOfService;
