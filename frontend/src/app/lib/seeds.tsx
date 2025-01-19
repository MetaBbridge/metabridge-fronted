export interface Project {
  name: string;
  logo: string;
  icon: string;
  description: string;
}
export const projects: Project[] = [
  {
    name: "Sela Matrix",
    logo: "/assets/depin.png",
    icon: "/assets/depin-logo.png",
    description:
      "Sela Matrix DePIN Manager is an all-in-one platform designed to simplify the deployment, management, and monetization of Decentralized Physical Infrastructure Networks (DePINs).",
  },
  {
    name: "ZKSecure",
    logo: "/assets/zksecure.png",
    icon: "/assets/zk-logo.png",
    description:
      "ZKSecure harnesses the power of zero-knowledge proofs (ZKPs) to create a privacy-first blockchain platform. Ideal for industries like healthcare, finance, and identity management, ZKSecure ensures sensitive information...",
  },
  {
    name: "BlockHaven",
    logo: "/assets/blockchain.png",
    icon: "/assets/blockchain-logo.png",
    description:
      "BlockHaven is a blockchain platform designed to provide unparalleled security and scalability for digital assets and data. Leveraging smart contracts and decentralized storage, it offers a safe haven for businesses and individuals...",
  },
];
