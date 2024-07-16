import styles from './Campo.module.css'

const Campo = (props) => {

      
      const handlerChange =(e)=>{
          props.actualizarValor(e.target.value)
      }
      const classNameCampo = props.campo?props.campo:styles.campo;
      const classInput = props.input?props.input:styles.inputCampo;

      return <div className={classNameCampo}>
          <label>{props.titulo}</label>
          <input className={classInput}
              placeholder={props.placeholder} 
              required={props.required} 
              value={props.valor}
              onChange= {handlerChange}   
              type= {props.type}
          />
      </div>
  }
  
  export default Campo