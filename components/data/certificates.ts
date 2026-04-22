export interface Certificate {
  title: string;
  pdf?: string; // path to PDF in public/certificates (optional)
  image?: string; // path to image in public/certificates (preferred)
  thumbnail?: string; // optional image preview
}

export const certificates: Certificate[] = [
  {
    title: "AutoCAD",
    image: "/certificates/autocad.png",
    pdf: "/certificates/autocad-haseeb-ullah.pdf"
  },
  {
    title: "C++ Certificate 1",
    image: "/certificates/cpp-1.jpg"
  },
  {
    title: "C++ Certificate (Cisco)",
    image: "/certificates/cpp-cisco.png",
    pdf: "/certificates/cpp-cisco.pdf"
  },
  {
    title: "Web Design with HTML & CSS",
    image: "/certificates/designing-website-html-css.jpg"
  },
  {
    title: "Digital Marketing",
    image: "/certificates/digital-marketing.png"
  },
  {
    title: "Freelancing",
    image: "/certificates/freelancing.png"
  },
  {
    title: "Graphic Design",
    image: "/certificates/graphic-design.png"
  },
  {
    title: "HTML and CSS",
    image: "/certificates/html-css.jpg"
  },
  {
    title: "MS Word",
    image: "/certificates/ms-word.jpg"
  },
  {
    title: "Networking",
    image: "/certificates/networks.png",
    pdf: "/certificates/networking.pdf"
  },
  {
    title: "Python (Beginner)",
    image: "/certificates/python-beginner.jpg"
  },
  {
    title: "Python (Intermediate)",
    image: "/certificates/python-intermediate.jpg"
  },
  {
    title: "SQL",
    image: "/certificates/sql.jpg"
  },
  {
    title: "Video Editing",
    image: "/certificates/video-editing.png",
    pdf: "/certificates/video-editing-haseeb.pdf"
  },
  {
    title: "App Development",
    image: "/certificates/app-development.jpg"
  },
  {
    title: "Java",
    image: "/certificates/java.jpg"
  },
  {
    title: "Spark Machine Learning Project",
    image: "/certificates/spark-machine-learning.jpg"
  },
  {
    title: "Practical Help Desk",
    image: "/certificates/it-support.jpeg"
  }
];
