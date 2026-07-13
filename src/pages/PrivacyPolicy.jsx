import { Link } from 'react-router-dom';

function PrivacyPolicy({ app }) {
  if (app === 'QRSTU') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - QRSTU</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: January 11, 2026</p>
            <p><strong>QRSTU</strong> ("we", "our", or "us") is committed to protecting your privacy.</p>
            
            <h3>1. Information We Collect</h3>
            <h4>Permission-Based Data</h4>
            <ul>
                <li><strong>Camera</strong>: Used strictly for scanning QR codes locally. No video data is sent to servers.</li>
            </ul>
            
            <h4>Third-Party Services</h4>
            <ul>
                <li><strong>Firebase Authentication</strong>: For secure sign-ins.</li>
                <li><strong>Firebase Crashlytics</strong>: For anonymous crash reporting.</li>
                <li><strong>Firebase Firestore</strong>: For data syncing.</li>
            </ul>

            <h3>2. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Data:</strong><br/>
                Open App &gt; <strong>Settings</strong> &gt; <strong>Account</strong> &gt; <strong>Delete Account</strong>.<br/>
                This permanently removes your data.
            </div>

            <h3>3. Contact Us</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  if (app === 'Bensy') {
    return (
      <section className="active-view">
        <div className="glass-card document-card">
          <div className="card-header">
            <h2>Privacy Policy - Bensy</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: June 19, 2026</p>
            <p><strong>Bensy</strong> ("we", "our", or "us") is a fuel and vehicle cost tracking application operated by BaskomLabs.</p>
            
            <h3>1. Information We Collect</h3>
            <h4>Account Data (Signed-in users)</h4>
            <ul>
                <li><strong>Google Account profile</strong>: name, email address, and profile picture.</li>
                <li><strong>User ID</strong>: unique identifier issued by Firebase Authentication.</li>
            </ul>
            <h4>Permission-Based Data</h4>
            <ul>
                <li><strong>Camera</strong>: processed entirely on your device using Google ML Kit.</li>
            </ul>
            
            <h3>2. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Account &amp; Data:</strong><br/>
                Open App &gt; <strong>Profile</strong> &gt; <strong>Account</strong> &gt; <strong>Delete Account</strong>.
            </div>
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
            <h2>Privacy Policy - PembacaKUE</h2>
            <Link to="/home" className="close-btn btn-secondary">Back to Home</Link>
          </div>
          <div className="document-content">
            <p className="meta">Effective Date: July 13, 2026</p>
            <p><strong>PembacaKUE</strong> ("we", "our", or "us") is an Identity Card Reader & Verifier application operated by BaskomLabs.</p>
            
            <h3>1. Information We Collect and Process</h3>
            <h4>Permission-Based Data & Hardware</h4>
            <ul>
                <li><strong>NFC (Near Field Communication)</strong>: We use your device's NFC capabilities strictly to read data directly from supported identity cards (such as e-KTP).</li>
            </ul>
            
            <h3>2. Data Processing and Storage</h3>
            <p>All identity data read by PembacaKUE is processed <strong>locally on your device</strong>. We do not transmit, collect, or store your personal identity information on our servers. Any data handled during a scanning session is transient and discarded after use or stored only locally if explicitly saved by you.</p>

            <h3>3. Data Retention & Deletion</h3>
            <div className="alert-box">
                <strong>How to Delete Your Data:</strong><br/>
                Because no data is sent to our servers, simply uninstalling the application or clearing the app's local data will permanently delete any saved information.
            </div>

            <h3>4. Contact Us</h3>
            <p>Email: <a href="mailto:baskomdevs@gmail.com">baskomdevs@gmail.com</a></p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default PrivacyPolicy;
