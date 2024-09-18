import { MetaFunction } from '@remix-run/node';
import { LinksFunction } from '@remix-run/node';
import styles from './styles/styles.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Blog' },
    { name: 'description', content: 'A sample blog page using Remix and Bootstrap' },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return (
    <div>
      {/* Header 區域 */}
      <header className="header">
        <div className="container text-center">
          <h1 className="blog-title">BLOG</h1>
          <nav className="navbar justify-content-center">
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Posts</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 主內容區 */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="post">
                <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Post Image" />
                <div className="post-overlay">
                  <p>I think it is interesting</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Post Image" />
                <div className="post-overlay">
                  <p>I think it is interesting</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Post Image" />
                <div className="post-overlay">
                  <p>I think it is interesting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h2>Welcome to this Lifestyle blog</h2>
              <p>This is a brief introduction about the blog and its content.</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="post-summary">
                <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Post Summary Image" />
                <div className="summary-overlay">
                  <p>Lifestyle Posts</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-summary">
                <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Post Summary Image" />
                <div className="summary-overlay">
                  <p>Another Topic</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-summary">
                <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Post Summary Image" />
                <div className="summary-overlay">
                  <p>More Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
