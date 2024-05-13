import logo from "./logo.svg";
import "./App.css";

import Lists from "./moudule/components/Lists";

const cakes = [
  {
    id: 1,
    title: "Lemon cheesecake",
    calories : 200 ,
    previewDescription: "A cheesecake made of lemon",
    detailDescription:
      "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake. It may be baked or unbaked (usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored or topped with fruit, whipped cream, nuts, cookies, fruit sauce, and/or chocolate syrup. Cheesecake can be prepared in many flavors, such as strawberry, pumpkin, key lime, chocolate, Oreo, chestnut, or toffee.",
    image:
      "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg",
  },
  {
    id: 2,
    title: "Victoria sponge",
    calories : 400 ,
    previewDescription: "sponge with jam",
    detailDescription:
      "The Victoria sponge, also known as the Victoria sandwich or Victorian Cake, was named after Queen Victoria, who was known to enjoy a slice of the sponge cake with her afternoon tea. It is often referred to simply as 'sponge cake', though it contains additional fat. A typical Victoria sponge consists of raspberry jam and whipped double cream or vanilla cream. The jam and cream are sandwiched between two sponge cakes; the top of the cake is not iced or decorated apart from a dusting of icing sugar. A Victoria sponge is made using one of two methods. The traditional method involves creaming caster sugar with fat (usually butter), mixing thoroughly with beaten egg, then folding flour and raising agent into the mixture. The modern method, using an electric mixer or food processor, involves simply whisking all the ingredients together until creamy. Additionally, the modern method typically uses an extra raising agent, and some recipes call for an extra-soft butter or margarine. Both the traditional and modern methods are relatively quick and simple, producing consistent results, making this type of mixture one of the most popular for children and people in a hurry. This basic 'cake' mixture has been made into an endless variety of treats and puddings, including cupcakes, chocolate cake, Eve's pudding, and many others.",
    image:
      "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/victoria_sponge.jpg",
  },
  {
    id: 3,
    title: "Carrot cake",
    calories : 600 ,
    previewDescription: "Bugs bunnys favourite",
    detailDescription:
      "Carrot cake closely resembles a quick bread in method of preparation (all the wet ingredients, such as the eggs and sugar, are mixed, all the dry ingredients are mixed, and the wet are then added to the dry) and final consistency (which is usually denser than a traditional cake and has a coarser crumb). Many carrot cake recipes include optional ingredients, such as kirsch, cinnamon, nuts, pineapple or raisins. The most common icing on carrot cake is icing sugar and lemon juice or icing sugar and kirsch (Europe) and an icing with icing sugar, butter and cream cheese (United States). As the cake is relatively moist, it can be conserved longer than many other types of cakes.",
    image:
      "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/carrot_cake.jpg",
  },
  {
    id: 4,
    title: "Banana cake",
    calories : 800 ,
    previewDescription: "Banana cake is a cake prepared using banana",
    detailDescription:
      "Banana cake is prepared using banana as a primary ingredient and typical cake ingredients such as flour, sugar, eggs, butter, margarine or oil and baking soda. The bananas can be mashed or puréed using a food processor or electric mixer and mixed into the cake batter, and the cake can also be topped or garnished with sliced bananas. Banana cake may be prepared as a use for browned or overly-ripe bananas. Chocolate may be used as an ingredient, which along with the banana is an enjoyable flavor combination for some people. Nuts such as walnuts and macadamias may be used in the batter and to top and garnish the cake.",
    image:
      "https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/banana_cake.jpg",
  },
];

function App() {
  
  // function to display cakes list
  // const listItems = cakes.map((cake) => {
  //   const itemText = `${cake.title} - ${cake.calories}`;
  //   return <li>{itemText}</li>;
  // });

  return (
    <div className="App">
      {/* <ul>{listItems}</ul> */}
      <Lists cakeList={cakes} />
    </div>
  );
}

export default App;
