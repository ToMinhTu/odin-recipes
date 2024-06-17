let check = localStorage.getItem("id");
let data = [
    {
        title: "Homemade Crispy Hash Browns",
        img: "57783-emilys-famous-hash-browns-DDMFS-4x3-ce2a6ec1178640258faf601d6848ff11.webp",
        link: "57783/emilys-famous-hash-browns/",
        time: {
            prep: 20,
            cook: 15,
            total: 35,
            servings: 4,
        },
        text: {
            title1: "How to Make Hash Browns",
            title2: "How to Make Hash Browns Crispy",
            p1: "Believe it or not, making crispy hash browns is actually quite easy. First, shred your potatoes using your preferred method — either with a grater, food processor, or mandoline.Rinse the potatoes until the water is clear, then drain and squeeze out all the remaining liquid(this will ensure the hash browns are extra crispy). ",
            p2: "Next, you'll add in your binding agents (flour and egg) as well as any other ingredients or seasonings. This recipe only calls for onion, but you could also add cheese, cayenne pepper, or garlic to the mixture. ",
            p3: "Form your hash browns into patties (either one large hash brown or multiple smaller pancake-like hash browns) and pan fry them in oil, about five minutes on each side. ",
            p4: "To keep your hash browns crispy, make sure to heat the oil to sizzling before adding the patties and wait until the one side is golden brown before flipping.",
            p5: "You can also make your hash browns thinner because they will get crispier and cook more evenly.",
        },
    },
    {
        title: "Dad's Double Whole Grain Pancakes",
        img: "3425-4f0b3375c42e4f0dbb4875fadaba90ab.webp",
        link: "44767/dads-double-whole-grain-pancakes/",
        time: {
            prep: 15,
            cook: 20,
            total: 35,
            servings: 28,
        },
        text: {
            title1: "Step 1",
            title2: "Step 2",
            p1: "In a large bowl, sift all-purpose flour, milk powder, baking powder, baking soda and salt. Stir in whole wheat flour. In a small bowl, combine sugar, eggs, water, butter and vinegar. Make a well in the flour mixture, and pour in the egg mixture. Mix until smooth. ",
            p2: "",
            p3: "",
            p4: "Heat a lightly oiled griddle or frying pan over medium heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until pancakes are golden brown on both sides; serve hot. ",
            p5: "",
        },
    },
    {
        title: "Dad's Creamy Cucumber Salad",
        img: "238423-dads-creamy-cucumber-salad-DDMFS-4x3-36063371e89e463d91c5282ae0873779.webp",
        link: "238423/dads-creamy-cucumber-salad/",
        time: {
            prep: 10,
            cook: 2,
            total: 2,
            servings: 8,
        },
        text: {
            title1: "How to Make Creamy Cucumber Salad",
            title2: "What to Serve With Creamy Cucumber Salad",
            p1: "Making a refreshing cucumber salad couldn't be simpler. You'll find the full recipe below with step-by-step instructions, but here's what you can expect when you make this top-rated recipe:",
            p2: "Begin by combining salt, cucumbers, and onions in a bowl and allowing the mixture to sit at room temperature for 15-30 minutes. Next, drain the mixture in a colander placed over a bowl or sink before incorporating mayonnaise, vinegar, and seasonings. ",
            p3: "Cover and refrigerate for one to two hours before serving. The result is a tantalizingly creamy side dish that will keep you coming back for more.",
            p4: "Looking for something to serve alongside this creamy cucumber and onion salad? This tangy, sweet, and totally satisfying recipe pairs well with a range of dishes. Try a hearty beef dish like Beef Sukiyaki to balance the flavor scales or keep things light with a roasted lemon-herb chicken. ",
            p5: "",
        },
    }
];


function add_data_to_element(num) {
    document.getElementById("title").innerText = data[num].title;
    document.getElementById("image").src = "../images/" + data[num].img;
    document.getElementById("image").alt = data[num].title;
    document.getElementById("link").href = "https://www.allrecipes.com/recipe/" + data[num].link;
    document.getElementById("prep").innerText = data[num].time.prep + " mins";
    if (check == "3") {
        document.getElementById("cook").innerText = data[num].time.cook + " hrs";
        document.getElementById("total").innerText = data[num].time.total + " hrs " + data[num].time.prep + " mins";
    } else {
        document.getElementById("cook").innerText = data[num].time.cook + " mins";
        document.getElementById("total").innerText = data[num].time.total + " mins";
    }
    document.getElementById("servings").innerText = data[num].time.servings;
    document.getElementById("title1").innerText = data[num].text.title1;
    document.getElementById("title2").innerText = data[num].text.title2;
    document.getElementById("p1").innerText = data[num].text.p1;
    document.getElementById("p2").innerText = data[num].text.p2;
    document.getElementById("p3").innerText = data[num].text.p3;
    document.getElementById("p4").innerText = data[num].text.p4;
    document.getElementById("p5").innerText = data[num].text.p5;
}

add_data_to_element(check);