import React from 'react'

export default function PizzaForm(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    
    
    return(
     <form id='pizza-form' onSubmit={onSubmit}>
         <div className='form-submit'>
             <h2>Build Your Own Pizza</h2>
             <button id='order-button' disabled={disabled}>Place Order</button>
             <div className='errors'>
                 <div>{errors.name}</div>
             </div>
         </div>
        <div className='form-inputs'>
         <label htmlFor='nameInput'>
             <input
                id='name-input'
                value={values.name}
                name='name'
                type='text'
                onChange={onChange}
             />
         </label>
         <label htmlFor='selectSize'>
            <select
                id='size-dropdown'
                value={values.size}
                name='size'
                type='text'
                onChange={onChange}
            >
                <option value=''>-- Select Size --</option>
                <option value='infinitesimal'>Infinitesimal</option>
                <option value='personal'>Personal</option> 
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='monstrous'>Monstrous</option> 
            </select>

         </label>   
         <label htmlFor='pepperoni'>Pepperoni
            <input
                id='pepperoni'
                type='checkbox'
                name='pepperoni'
                onChange={onChange}
                checked={values.pepperoni}
            />
         </label>
         <label htmlFor='gabagool'>Gabagool
            <input
                id='gabagool'
                type='checkbox'
                name='gabagool'
                onChange={onChange}
                checked={values.gabagool}
            />
         </label>
         <label htmlFor='grilledChicken'>Grilled Chicken
            <input
                id='grilledChicken'
                type='checkbox'
                name='grilledChicken'
                onChange={onChange}
                checked={values.grilledChicken}
            />
         </label>
         <label htmlFor='canadianBacon'>Canadian Bacon
            <input
                id='canadianBacon'
                type='checkbox'
                name='canadianBacon'
                onChange={onChange}
                checked={values.canadianBacon}
            />
         </label>
         <label htmlFor='bacon'>Bacon
            <input
                id='bacon'
                type='checkbox'
                name='bacon'
                onChange={onChange}
                checked={values.bacon}
            />
         </label>
         <label htmlFor='onion'>Onion
            <input
                id='onion'
                type='checkbox'
                name='onion'
                onChange={onChange}
                checked={values.onion}
            />
         </label>
         <label htmlFor='greenPepper'>Green Pepper
            <input
                id='greenPepper'
                type='checkbox'
                name="greenPepper"
                onChange={onChange}
                checked={values.greenPepper}
            />
         </label>
         <label htmlFor='jalapenos'>Jalapeños
            <input
                id='jalapenos'
                type='checkbox'
                name='jalapenos'
                onChange={onChange}
                checked={values.jalapenos}
            />
         </label>
         <label htmlFor='pineapple'>Pineapple
            <input
                id='pineapple'
                type='checkbox'
                name='pineapple'
                onChange={onChange}
                checked={values.pineapple}
            />
         </label>
         <label htmlFor='olives'>Olives
            <input
                id='olives'
                type='checkbox'
                name='olives'
                onChange={onChange}
                checked={values.olives}
            />
         </label>
         <label htmlFor='mushrooms'>Mushrooms
            <input
                id='mushrooms'
                type='checkbox'
                name='mushrooms'
                onChange={onChange}
                checked={values.mushrooms}
            />
         </label>
         <label htmlFor='specialInstructions'>Special Instructions
            <input
                id='special-text'
                value={values.special}
                onChange={onChange}
                name='special'
                type='text'
            />
         </label>
        </div>
     </form>   
    )
}