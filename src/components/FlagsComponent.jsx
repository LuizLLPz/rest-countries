export const FlagsComponent = (props) => {
	const { data } = props;
	if (!data) {
		return (
			<div>Carregando países!</div>
		)
	} else { 
		return (
			<div onClick={() => console.log(data)}>
			{
			data.map( item => {
				return <h1>{item.name.official}</h1>
			})
			}
			</div>
		);
	}
}