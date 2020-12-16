import {
  AlertOutlined,
  BranchesOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
  FileProtectOutlined,
  OneToOneOutlined,
} from "@ant-design/icons";

export const dataSection = [
  {
    title: "Stay up to date",
    description:
      "Some data, like currencies, change all the time. We help you stay up to date.",
    iconComponent: AlertOutlined,
  },
  {
    title: "Integrate large datasets",
    description:
      "Some datasets, like taxonomy and commodities, are too unweildly to bundle with your frontend. We take care of serving these large datasets for you.",
    iconComponent: DatabaseOutlined,
  },
  {
    title: "It's free",
    description: "Nuf said. All you need is an API key to get started.",
    iconComponent: FileProtectOutlined,
  },
];

export const developerSection = [
  {
    title: "Focus on other stuff",
    description:
      "Don't fret about data collection. We keep everything up to date so you don't have to.",
    iconComponent: OneToOneOutlined,
  },
  {
    title: "Built for the web",
    description:
      "Easily integrate our JSON response format into your web applications. Ain't nobody got time for XML!",
    iconComponent: ClockCircleOutlined,
  },
  {
    title: "Simple REST API",
    description:
      "There's nothing crazy about our API and you don't need to be an expert in anything. Check out the docs to get started!",
    iconComponent: BranchesOutlined,
  },
];
