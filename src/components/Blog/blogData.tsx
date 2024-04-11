import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    url: "/blog-jak-znalezc-pracownika",
    title: "Jak znaleźć pracownika przez agencję pracy?",
    paragraph:
      "Ocena aktualnych umiejętności i przyszłych potrzeb pracowników jest jednym z kluczowych wyzwań...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Marta",
      image: "/images/blog/author-01.png",
      designation: "rekrutuj365",
    },
    tags: ["praca"],
    publishDate: "2023",
  },
  {
    id: 2,
    url: "/blog-jak-napisac-cv",
    title: "Jak napisać CV?",
    paragraph:
      "Napisanie skutecznego CV to kluczowy krok w procesie poszukiwania pracy. W artykule tym omówimy, jak przygotować CV...",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Marta",
      image: "/images/blog/author-01.png",
      designation: "rekrutuj365",
    },
    tags: ["praca"],
    publishDate: "2023",
  },
  {
    id: 3,
    url: "/blog-jak-dobrze-wypasc-na-rozmowie-kwalifikacyjnej",
    title: "Jak dobrze wypaść na rozmowie kwalifikacyjnej?",
    paragraph:
      "Ocena aktualnych umiejętności i przyszłych potrzeb pracowników jest kluczowym elementem każdego procesu...",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Marta",
      image: "/images/blog/author-01.png",
      designation: "rekrutuj365",
    },
    tags: ["praca"],
    publishDate: "2023",
  },
];
export default blogData;
