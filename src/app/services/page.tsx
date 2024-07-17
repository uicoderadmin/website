import ContactContainer from "@/components/common/contact-container";
import HighlightSection from "@/components/common/HighlightSection";
import Section from "@/components/services/Section";
import React from "react";

type Props = {};

const designServices = [
  {
    category: "User Experience (UX) Design",
    items: [
      {
        title: "User Research and Persona Development",
        img: "/user_research_and_persona_development.svg"
      },
      {
        title: "Information Architecture and Wireframing",
        img: "/information_architecture_and_wireframing.svg"
      },
      {
        title: "Interactive Prototyping and User Testing",
        img: "/interactive_prototyping_and_user_testing.svg"
      },
      {
        title: "UI Design and Visual Branding",
        img: "/ui_design_and_visual_branding.svg"
      }
    ]
  },
  {
    category: "User Interface (UI) Design",
    items: [
      {
        title: "Intuitive and Visually Appealing Interface Design",
        img: "/intuitive_and_visually_appealing_interface_design.svg"
      },
      {
        title: "Custom Iconography and Illustration",
        img: "/custom_iconography_and_illustration.svg"
      },
      {
        title: "Typography and Color Palette Selection",
        img: "/typography_and_color_palette_selection.svg"
      },
      {
        title: "Responsive Design for Various Devices",
        img: "/responsive_design_for_various_devices.svg"
      }
    ]
  },
  {
    category: "Branding and Identity",
    items: [
      {
        title: "Logo Design and Visual Identity Development",
        img: "/logo_design_and_visual_identity_development.svg"
      },
      {
        title: "Brand Strategy and Positioning",
        img: "/brand_strategy_and_positioning.svg"
      },
      {
        title: "Brand Guidelines and Style Guides",
        img: "/brand_guidelines_and_style_guides.svg"
      },
      {
        title: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
        img: "/marketing_collateral_design_brochures_business_cards_etc.svg"
      }
    ]
  }
];

const projectManagementServices = [
  {
    category: "Project Planning and Scoping",
    items: [
      {
        title: "Requirements Gathering and Analysis",
        img: "/requirements_gathering_and_analysis.svg"
      },
      {
        title: "Project Roadmap and Timeline Development",
        img: "/project_roadmap_and_timeline_development.svg"
      },
      {
        title: "Resource Allocation and Task Assignment",
        img: "/resource_allocation_and_task_assignment.svg"
      },
      {
        title: "Risk Assessment and Mitigation Strategies",
        img: "/risk_assessment_and_mitigation_strategies.svg"
      }
    ]
  },
  {
    category: "Agile Development",
    items: [
      {
        title: "Iterative Development and Sprints",
        img: "/iterative_development_and_sprints.svg"
      },
      {
        title: "Scrum or Kanban Methodology Implementation",
        img: "/scrum_or_kanban_methodology_implementation.svg"
      },
      {
        title: "Regular Progress Updates and Demos",
        img: "/regular_progress_updates_and_demos.svg"
      },
      {
        title: "Continuous Improvement and Feedback Incorporation",
        img: "/continuous_improvement_and_feedback_incorporation.svg"
      }
    ]
  },
  {
    category: "Quality Assurance and Testing",
    items: [
      {
        title: "Test Planning and Execution",
        img: "/test_planning_and_execution.svg"
      },
      {
        title: "Functional and Usability Testing",
        img: "/functional_and_usability_testing.svg"
      },
      {
        title: "Performance and Security Testing",
        img: "/performance_and_security_testing.svg"
      },
      {
        title: "Bug Tracking and Issue Resolution",
        img: "/bug_tracking_and_issue_resolution.svg"
      }
    ]
  }
];

const engineeringServices = [
  {
    category: "Web Development",
    items: [
      {
        title: "Front-End Development (HTML, CSS, JavaScript)",
        img: "/front_end_development_html_css_javascript.svg"
      },
      {
        title: "Back-End Development (PHP, Python, Ruby)",
        img: "/back_end_development_php_python_ruby.svg"
      },
      {
        title:
          "Content Management System (CMS) Development (WordPress, Drupal)",
        img: "/content_management_system_cms_development_wordpress_drupal.svg"
      },
      {
        title: "E-Commerce Platform Development (Magento, Shopify)",
        img: "/e_commerce_platform_development_magento_shopify.svg"
      }
    ]
  },
  {
    category: "Mobile App Development",
    items: [
      {
        title: "Native iOS and Android App Development",
        img: "/native_ios_and_android_app_development.svg"
      },
      {
        title: "Cross-Platform App Development (React Native, Flutter)",
        img: "/cross_platform_app_development_react_native_flutter.svg"
      },
      {
        title: "App Prototyping and UI/UX Design Integration",
        img: "/ux_design_integration.svg"
      },
      {
        title: "App Testing, Deployment, and Maintenance",
        img: "/app_testing_deployment_and_maintenance.svg"
      }
    ]
  },
  {
    category: "Custom Software Development",
    items: [
      {
        title: "Enterprise Software Development",
        img: "/enterprise_software_development.svg"
      },
      {
        title: "Custom Web Application Development",
        img: "/custom_web_application_development.svg"
      },
      {
        title: "Integration with Third-Party APIs and Systems",
        img: "/integration_with_third_party_apis_and_systems.svg"
      },
      {
        title: "Legacy System Modernization and Migration",
        img: "/legacy_system_modernization_and_migration.svg"
      }
    ]
  }
];

const Services = (props: Props) => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto tab:px-0 px-4 ">
      <HighlightSection
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        bgImage="/service-bg.webp"
      />
      <Section
        title="Design"
        description="At Uicoder, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
        buttonText="Our design services include:"
        services={designServices}
      />
      <Section
        title="Engineering"
        description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
        buttonText="Our engineering services include:"
        services={engineeringServices}
      />
      <Section
        title="Project Management"
        description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
        buttonText="Our project management services include:"
        services={projectManagementServices}
      />
      <ContactContainer showForm={false} />
    </div>
  );
};

export default Services;
