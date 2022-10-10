import { Component } from "react";


class Fridge extends Component {
    categories = ['Kött', 'Vätska', 'Frukt']
    options = this.categories.map((category) => {
        <option value={category}>{category}</option>
    })
    render() {
        return <figure>
            <form>
                <input type="text"></input>
                <select>
                    {this.options}
                </select>
                <input type="date"></input>
                <input type="number"></input>
            </form>
            <figure>

            </figure>
        </figure>
    }
    
}

export default Fridge;