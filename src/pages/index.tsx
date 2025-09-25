import Card from "../components/widgets/Card";
import Button from "../components/widgets/Button";
import Heading from "../components/widgets/Heading";
import Paragraph from "../components/widgets/Paragraph";
import Alert from "../components/widgets/Alert";
import Tabs from "../components/widgets/Tabs";
import Table from "../components/widgets/Table";
import Modal from "../components/widgets/Modal";
import Form from "../components/widgets/Form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-28 bg-gray-200 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build Beautiful Interfaces <br />
            <span className="text-yellow-300">Faster than Ever</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Scratch Frontend is your starter playground with prebuilt, customizable UI
            components — perfect for rapid prototyping or scaling projects.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary">🚀 Get Started</Button>
            <Button variant="secondary">📖 Learn More</Button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-6 max-w-6xl mx-auto">
        <Heading level={2} className="text-center text-3xl font-bold mb-8 text-gray-900">
          Explore Templates
        </Heading>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {[
            { title: "Feature 1", desc: "Description for feature 1", link: "/feature1" },
            { title: "Feature 2", desc: "Description for feature 2", link: "/feature2" },
            { title: "Feature 3", desc: "Description for feature 3", link: "/feature3" },
            { title: "Feature 4", desc: "Description for feature 4", link: "/feature4" },
            { title: "Feature 5", desc: "Description for feature 4", link: "/feature5" },
          ].map((item, idx) => (
            <Link href={item.link} key={idx} className="min-w-[280px] flex-shrink-0">
              <Card className="h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition">
                <div>
                  <Heading level={3} className="mb-2">{item.title}</Heading>
                  <Paragraph>{item.desc}</Paragraph>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Components Showcase */}
      <section className="px-6 max-w-6xl mx-auto space-y-16">
        <Heading level={1} className="text-center text-4xl font-bold text-gray-900">
          UI Components
        </Heading>
        <Card>
          <Heading level={2}>Buttons</Heading>
          <div className="flex gap-6 mt-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Alerts</Heading>
          <div className="space-y-4 mt-4">
            <Alert type="success" message="This is a success alert!" />
            <Alert type="error" message="This is an error alert!" />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Tabs</Heading>
          <Tabs
            tabs={[
              { id: "1", label: "Tab 1", content: "Content 1" },
              { id: "2", label: "Tab 2", content: "Content 2" },
            ]}
          />
        </Card>
        <Card>
          <Heading level={2}>Table</Heading>
          <Table
            columns={[
              { key: "name", label: "Name" },
              { key: "age", label: "Age" },
            ]}
            data={[
              { name: "Alice", age: 22 },
              { name: "Bob", age: 30 },
            ]}
          />
        </Card>
        <Card>
          <Heading level={2}>Modal</Heading>
          <Modal />
        </Card>
        <Card>
          <Heading level={2}>Form</Heading>
          <Form
            fields={[
              { name: "username", label: "Username", type: "text", placeholder: "Enter username" },
              { name: "email", label: "Email", type: "email", placeholder: "Enter email" },
              { name: "password", label: "Password", type: "password", placeholder: "Enter password" },
            ]}
          />
        </Card>
        <Card>
          <Heading level={2}>Typography</Heading>
          <Heading level={3}>Heading Example</Heading>
          <Paragraph>
            This is a paragraph example for typography demonstration.
          </Paragraph>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center py-24 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Build with Ready-to-Use UI
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore, copy, and customize components directly from this template.
        </p>
        <Button label="✨ Start Building" />
      </section>
    </div>
  );
}
