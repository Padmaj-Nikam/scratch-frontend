import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <Heading level={1}>About This Project</Heading>
      <Paragraph>
        This frontend scratch project provides reusable UI components to help
        developers quickly build prototypes and full-fledged applications.
      </Paragraph>
      <Paragraph>
        The purpose is to save time by having buttons, forms, alerts, modals,
        tables, and typography all pre-built and styled with Tailwind.
      </Paragraph>
    </div>
  );
}
