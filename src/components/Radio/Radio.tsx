import styles from "./Radio.module.css";

interface IId {
  id: number;
  done: boolean;
  AlterSlide(idSlide : number): void;
}

export function Radio({id, done, AlterSlide}: IId) {

	function handleAlterSlideOnClick() {
	  AlterSlide(id);	
	}

	return(
		<div className={styles.radioContainer}>
			<input 
			  type="radio" 
			  name="slides" 
			  id={`${id}`} 
			  checked={done}
			  onClick={handleAlterSlideOnClick}
			  />
			  
			<label htmlFor={`${id}`} ></label>  
		</div>
	)

}