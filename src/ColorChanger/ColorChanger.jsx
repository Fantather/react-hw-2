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
        return(
            <div>
                <span>Выберите цвет:</span>
                <input type="color" id="color-input" onChange={this.handleInputChange} value={this.state.selectedColor}/>
                <div id='changing-element' style={{backgroundColor: this.state.selectedColor}}></div>
                <select id="color-select" onChange={this.handleInputChange} value={this.state.selectedColor}>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                    <option value="#00ffff">Cyan</option>
                </select>
                <div>
                    <b>Примечание</b>
                    <div>Что бы Select изменился вслед за Input, значение цвета должно точно совпасть с тем, что принимает элемент списка</div>
                    <div>Можно ориентироваться на RGB, который показывает Input</div>
                </div>
            </div>
        );
    }
}