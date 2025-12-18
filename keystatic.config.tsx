import { config, collection, fields } from "@keystatic/core";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  ui: {
    brand: {
      name: "APS Studio",
      mark: () => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/favicon.ico" alt="APS" className="size-8 rounded-md" />;
      },
    },
    navigation: {
      'Case Study': ['caseStudies'],
      'Blog': ['posts', 'categories', 'authors', 'authorRoles',]
    }
    // [
    //   'caseStudies',
    //   '---',
    //   'posts',
    //   'authors',
    //   'authorRoles',
    //   'categories'
    // ]
  },
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Blog",
      slugField: "title",
      path: "src/data/blog/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ label: "Excerpt" }),
        element: fields.mdx({ label: "Element" }),
        content: fields.markdoc({ label: "Content" }),
        date: fields.date({ label: "Date" }),
        author: fields.relationship({
          label: "Author",
          collection: "authors",
          description: "Select an author from the Authors collection",
        }),
        category: fields.relationship({
          label: "Category",
          collection: "categories",
        }),
        gradient: fields.text({
          label: "Gradient Class",
          description:
            "Tailwind gradient class (eg, 'from-[#D3E4FD] to-[#FFD1D1]') ",
        }),
        icon: fields.cloudImage({ label: "Icon Link" }),
      },
    }),
    caseStudies: collection({
      label: "Case Studies",
      slugField: "company",
      path: "src/data/case-studies/*",
      format: { data: "json" },
      schema: {
        company: fields.slug({ name: { label: "Company" } }),
        icon: fields.cloudImage({ label: "Icon Link" }),
        title: fields.text({ label: "Title" }),
        subtitle: fields.text({ label: "Subtitle" }),
        metric: fields.object(
          {
            metrics: fields.text({ label: "Metric Label" }),
            outcome: fields.text({ label: "Metric Outcome" }),
          },
          {
            label: "Metric",
          }
        ),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({ label: "Content" }),
        techStack: fields.array(
          fields.text({ label: "Tech Stack" }),
          // Labelling options
          {
            label: "Tech Stack",
            itemLabel: (props) => props.value,
          }
        ),
        outcomes: fields.array(
          fields.object(
            {
              metrics: fields.text({ label: "Metrics" }),
              outcome: fields.text({ label: "Outcome" }),
            },
            {
              label: "Outcome",
            }
          ),
          {
            label: "Outcomes",
            itemLabel: (props) => props.fields.metrics.value,
          }
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/data/blog/authors/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        role: fields.relationship({
          label: "Role",
          collection: "authorRoles",
        }),
        image: fields.cloudImage({ label: "Image" }),
      },
    }),
    authorRoles: collection({
      label: "Author Roles",
      slugField: "role",
      path: "author-roles/*",
      format: { data: "json" },
      schema: {
        role: fields.slug({
          name: {
            label: "Label",
          },
          // Optional slug label overrides
          slug: {
            label: "Value",
          },
        }),
      },
    }),
    categories: collection({
      label: "Blog Categories",
      slugField: "category",
      path: "src/data/blog/categories/*",
      format: { data: "json" },
      schema: {
        category: fields.slug({
          name: {
            label: "Label",
          },
          // Optional slug label overrides
          slug: {
            label: "Value",
          },
        }),
      },
    }),
  },
});

/**
  * Blogs

  {
    id: "1",
    slug: "best-practices-showcasing-features",
    title: "Best practices for showcasing features",
    excerpt: "Show your product's value clearly and confidently with these best practices for presenting SaaS features that engage and convert.",
    date: "Oct 13, 2025",
    author: "Sarah Chen",
    authorRole: "Product Designer",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    category: "Design",
    gradient: "from-[#D3E4FD] to-[#FFD1D1]",
    icon: Star,
    element: (
      <div className="relative w-32 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
         
      </div>
    ),
    content: (
      <>
        
      </>
    )
  },

  * Case Studies
 * 
 * {
    id: "6",
    slug: "med-tech-innovators",
    company: "MedTech Innovators",
    category: "Healthcare",
    metric: "40% Faster",
    metricLabel: "Patient Onboarding",
    description:
      "Streamlining patient intake forms and insurance verification logic to reduce wait times.",
    icon: Zap,
    title: "Smart Patient Intake System",
    subtitle:
      "Seamless patient onboarding with automated insurance verification.",
    techStack: ["Next.js", "Azure Health Bot", "FHIR"],
    outcomes: [
      { metric: "Wait Times", outcome: "Reduced by 40%" },
      { metric: "Compliance", outcome: "100% HIPAA Compliant" },
    ],
  },
 */
