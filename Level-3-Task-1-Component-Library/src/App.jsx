import {
  Alert,
  Badge,
  Button,
  Card,
  Input,
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="showcase">
      <header className="showcase-header">
        <div>
          <span className="showcase-eyebrow">
            DEXTRO UI
          </span>

          <h1>Reusable components.</h1>

          <p>
            A modern React component library built for
            accessible and consistent interfaces.
          </p>
        </div>

        <Badge variant="success">
          v1.0 Ready
        </Badge>
      </header>

      <main className="showcase-content">
        <section className="showcase-section">
          <div className="section-title">
            <span>01</span>

            <div>
              <h2>Buttons</h2>
              <p>
                Flexible actions with multiple variants
                and sizes.
              </p>
            </div>
          </div>

          <Card>
            <div className="component-row">
              <Button>
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>
            </div>
          </Card>
        </section>

        <section className="showcase-section">
          <div className="section-title">
            <span>02</span>

            <div>
              <h2>Inputs</h2>
              <p>
                Accessible form controls with validation
                states.
              </p>
            </div>
          </div>

          <Card>
            <div className="input-grid">
              <Input
                label="Full Name"
                placeholder="Dheeraj Heggade"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />

              <Input
                label="API Key"
                placeholder="Enter your API key"
                helperText="Your API key is stored securely."
              />

              <Input
                label="Username"
                value="dheeraj"
                error="This username is already taken."
                readOnly
              />
            </div>
          </Card>
        </section>

        <section className="showcase-section">
          <div className="section-title">
            <span>03</span>

            <div>
              <h2>Badges</h2>
              <p>
                Compact indicators for status and
                categorization.
              </p>
            </div>
          </div>

          <Card>
            <div className="component-row">
              <Badge variant="default">
                Default
              </Badge>

              <Badge variant="primary">
                AI Tool
              </Badge>

              <Badge variant="success">
                Active
              </Badge>

              <Badge variant="warning">
                Pending
              </Badge>

              <Badge variant="danger">
                Failed
              </Badge>

              <Badge variant="info">
                New
              </Badge>
            </div>
          </Card>
        </section>

        <section className="showcase-section">
          <div className="section-title">
            <span>04</span>

            <div>
              <h2>Alerts</h2>
              <p>
                Clear feedback for important system
                messages.
              </p>
            </div>
          </div>

          <div className="alert-stack">
            <Alert
              title="Success"
              variant="success"
            >
              Your project has been deployed
              successfully.
            </Alert>

            <Alert
              title="Information"
              variant="info"
            >
              A new version of DEXTRO UI is available.
            </Alert>

            <Alert
              title="Warning"
              variant="warning"
            >
              Your API usage is approaching its limit.
            </Alert>

            <Alert
              title="Error"
              variant="danger"
            >
              We couldn't complete your request.
            </Alert>
          </div>
        </section>

        <section className="showcase-section">
          <div className="section-title">
            <span>05</span>

            <div>
              <h2>Card composition</h2>
              <p>
                Components can be combined to create
                larger interfaces.
              </p>
            </div>
          </div>

          <div className="card-grid">
            <Card
              title="AI Workspace"
              description="Build faster with intelligent tools."
              variant="gradient"
              footer={
                <Button size="small">
                  Explore
                </Button>
              }
            >
              <p>
                A reusable card can contain buttons,
                badges, inputs, alerts, and other
                components.
              </p>
            </Card>

            <Card
              title="Component Library"
              description="Built for developers and designers."
              variant="bordered"
              footer={
                <Badge variant="primary">
                  Reusable
                </Badge>
              }
            >
              <p>
                Every component is independently
                documented and customizable.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <footer className="showcase-footer">
        <strong>DEXTRO UI</strong>

        <span>
          A project by Dheeraj Heggade
        </span>
      </footer>
    </div>
  );
}

export default App;