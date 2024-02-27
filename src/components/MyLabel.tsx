import './myLabel.css'
interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta.
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  
  /**
   * Todo mayuscula
   */
  allCaps?: boolean;
 
  /**
   * Colores basicos
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Colores de la etiqueta
   */
  fontColor?: string;

}

export const MyLabel = ({label,size,allCaps,...props}:Props) => {
  return (
    <span style={{backgroundColor: `${props.fontColor}`}} className={`${size} ${props.color}`}>{allCaps ? label.toUpperCase() :label}</span>
  )
}
