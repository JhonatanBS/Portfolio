import styles from "./Radio.module.css";

interface IId {
  id: number;
  AlterSlide(idSlide : number): void;
}

export function Radio({id, AlterSlide}: IId) {

	function handleAlterSlideOnClick() {
	  AlterSlide(id);	
	}

	return(
		<div className={styles.radioContainer}>
			<input 
			  type="radio" 
			  name="slides" 
			  id={`${id}`} 
			  onClick={handleAlterSlideOnClick}
			  />
			  
			<label htmlFor={`${id}`} ></label>  
		</div>
	)

}