// Создайте компонент ColorChanger, который позволяет пользователю выбирать цвет из списка
// и изменять цвет фона компонента на выбранный
// Компонент должен использовать this.props и this.state
import React from 'react'
import './ColorChanger.css'

export class ColorChanger extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedColor: '#00ffff'
        }
    }

    handleInputChange = (event) => 
    {
        this.setState({selectedColor: event.target.value});
    }

    render()
    {
        const standardColors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff'];    
        const isCustomColor = !standardColors.includes(this.state.selectedColor);

        return(
            <div>
                <span>Выберите цвет:</span>
                <input type="color" id="color-input" onChange={this.handleInputChange} value={this.state.selectedColor}/>
                <span id='changing-element' style={{backgroundColor: this.state.selectedColor}}></span>
                <select id="color-select" onChange={this.handleInputChange} value={this.state.selectedColor}>
                    {isCustomColor && <option value={this.state.selectedColor}>{this.state.selectedColor}</option>} 
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                    <option value="#00ffff">Cyan</option>
                </select>
                <div>
                    <b>Примечание</b>
                    <div>Что бы Select показал пункт списка вслед за Input, значение цвета должно точно совпасть с тем, что принимает элемент списка</div>
                    <div>Можно ориентироваться на RGB, который показывает Input</div>
                    <div>Я спросил у ИИ, как реализовать вывод текущего Hex-значения через Select, сам бы я не додумался, но захотелось реализовать</div>
                </div>
            </div>
        );
    }
}