function recipe(x) {
    return {
        "farine": {
            "quantity": 63 * x,
            "unity": "g"
        },
        "oeuf": {
            "quantity": 1 * x,
            "unity": "oeuf(s)"
        },
        "beurre": {
            "quantity": 13 * x,
            "unity": "g"
        },
        "sucre": {
            "quantity": 0.5 * x,
            "unity": "c.à.s"
        },
        "lait": {
            "quantity": 0.2 * x,
            "unity": "L"
        }
    }
}

function set_recipe(e) {
    let input = document.getElementById("guys").value

    if (parseInt(input) == input) {
        let recipe_for = recipe(input)
        let i = 0
        let div_ingredient = document.getElementById("ingredient")

        document.getElementById('nb_pers').innerText = input

        for (let ingredient in recipe_for) {
            let div = div_ingredient.querySelectorAll("div")[i].querySelector("p")
            let span = document.createElement("span")

            div.innerText = ""
            span.classList.add('subline')

            if (ingredient == "oeuf") {
                span.innerText = Math.round(recipe_for[ingredient].quantity)
                div.appendChild(span)
                let txt = document.createTextNode(" oeuf(s)")
                div.appendChild(txt)
            } else if (ingredient == "sucre") {
                span.innerText = Math.round(recipe_for[ingredient].quantity * 10) / 10
                div.appendChild(span)
                let txt = document.createTextNode(" " + recipe_for[ingredient].unity + " de " + ingredient)
                div.appendChild(txt)
            } else {
                span.innerText = Math.round(recipe_for[ingredient].quantity * 10) / 10 + recipe_for[ingredient].unity
                div.appendChild(span)
                let txt = document.createTextNode(" de " + ingredient)
                div.appendChild(txt)
            }
            i++
        }
        if (screen.width < 600 && e == "1") {
            document.getElementById('ingredient').scrollIntoView({ behavior: 'smooth' });
        }
    }
}
window.onload = set_recipe()