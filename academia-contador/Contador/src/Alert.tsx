
type AlertProps = {count:number}

const Alert = ({count}:AlertProps) => {
   return count > 10 && <p>10</p>
}

export default Alert