import { useState } from 'react';

function Auth({ onBack }) {
  const [page, setPage] = useState('login');
  const [loginData, setLoginData]   = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' });
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');

  const reset = () => { setError(''); setSuccess(''); };

  const switchPage = (p) => { reset(); setPage(p); };

  const handleLogin = (e) => {
    e.preventDefault(); reset();
    const { email, password } = loginData;
    if (!email || !password)           return setError('Enter your email and password.');
    if (!/\S+@\S+\.\S+/.test(email))   return setError('Enter a valid email address.');
    setSuccess('Signed in — welcome back!');
  };

  const handleSignup = (e) => {
    e.preventDefault(); reset();
    const { firstName, lastName, email, password, confirm } = signupData;
    if (!firstName || !lastName || !email || !password || !confirm)
                                        return setError('All fields are required.');
    if (!/\S+@\S+\.\S+/.test(email))   return setError('Enter a valid email address.');
    if (password.length < 8)           return setError('Password must be at least 8 characters.');
    if (password !== confirm)          return setError("Passwords don't match.");
    setSuccess(`Account created for ${firstName}! You can now sign in.`);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-logo">🍣 Sushi Haven</div>

        {onBack && (
          <button className="auth-back" onClick={onBack}>
            ← Back to site
          </button>
        )}

        {error   && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        {page === 'login' ? (
          <>
            <p className="auth-sub">Welcome back — sign in to continue</p>
            <form onSubmit={handleLogin}>
              <div className="auth-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={loginData.email}
                  onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                />
              </div>
              <div className="auth-field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  value={loginData.password}
                  onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                />
              </div>
              <div className="auth-forgot">
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="auth-btn">Sign in</button>
            </form>
            <p className="auth-switch">
              Don't have an account?{' '}
              <span onClick={() => switchPage('signup')}>Create account</span>
            </p>
          </>
        ) : (
          <>
            <p className="auth-sub">Create your Sushi Haven account</p>
            <form onSubmit={handleSignup}>
              <div className="auth-name-row">
                <div className="auth-field">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={signupData.firstName}
                    onChange={e => setSignupData({ ...signupData, firstName: e.target.value })}
                  />
                </div>
                <div className="auth-field">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={signupData.lastName}
                    onChange={e => setSignupData({ ...signupData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className="auth-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={signupData.email}
                  onChange={e => setSignupData({ ...signupData, email: e.target.value })}
                />
              </div>
              <div className="auth-field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  value={signupData.password}
                  onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                />
              </div>
              <div className="auth-field">
                <label>Confirm password</label>
                <input
                  type="password"
                  placeholder="Repeat password"
                  value={signupData.confirm}
                  onChange={e => setSignupData({ ...signupData, confirm: e.target.value })}
                />
              </div>
              <button type="submit" className="auth-btn">Create account</button>
            </form>
            <p className="auth-switch">
              Already have an account?{' '}
              <span onClick={() => switchPage('login')}>Sign in</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
