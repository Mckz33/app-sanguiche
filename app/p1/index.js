import List from "./flatlist";

const DATA = [
  {
    coverImageUri:
      "http://bakeandcakegourmet.com.br/uploads/site/receitas/sanduiche-de-pernil-com-relish-de-pepeino-tratada-xbyfhjbz.jpg",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Picles",
  },
  {
    coverImageUri:
      "http://bakeandcakegourmet.com.br/uploads/site/receitas/sanduiche-de-pernil-com-relish-de-pepeino-tratada-xbyfhjbz.jpg",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Picles",
  },
  {
    coverImageUri:
      "http://lh5.ggpht.com/-HaJVp89JNtI/Tix0RK5wrgI/AAAAAAAADP8/49h8vFn9huw/x-pedreiro_thumb%25255B1%25255D.jpg?imgmax=800",
    cornerLabelColor: "grey",
    cornerLabelText: "Sanduíche de Ovo",
  },
];

export default function Page() {
    return (<List data={DATA} />);
}
